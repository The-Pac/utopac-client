#![cfg_attr(
all(not(debug_assertions), target_os = "windows"),
windows_subsystem = "windows"
)]

use serde::{Serialize, Deserialize};
use serde_json::json;
use tauri::{Event, Manager, Window};
use tauri::api::http::{Body, Client, ClientBuilder, HttpRequestBuilder, ResponseType};
use tauri::async_runtime::spawn;

#[derive(Clone, serde::Serialize)]
struct Payload {
    message: String,
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let client: Client = ClientBuilder::new()
                .build()
                .unwrap();
            app.listen_global("on_key_down", move |event| {
                spawn(on_key_down(event, client.to_owned()));
            });
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![close_splashscreen])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
async fn close_splashscreen(window: Window) {
    if let Some(splashscreen) = window.get_window("splashscreen") {
        splashscreen.close().unwrap();
    }
    window.get_window("main").unwrap().show().unwrap();
}

#[derive(Serialize, Deserialize)]
struct Key {
    key: String,
    is_repeat: bool,
}

#[tauri::command(async)]
async fn on_key_down(event: Event, client: Client) {
    if event.payload().is_some() {
        let key: Key = serde_json::from_str(event.payload().to_owned().unwrap()).unwrap();

        let data = json!({
            "key": key.key,
            "is_repeat": key.is_repeat
        });

        let request_builder: HttpRequestBuilder = HttpRequestBuilder::new("POST", "http://localhost:4005/drive-command")
            .unwrap()
            .body(Body::Json(data))
            .response_type(ResponseType::Json);

        let response = client.send(request_builder).await;
        if response.is_ok() {
            println!("requete envoyer");
        } else {
            println!("impossible d'envoyer la requete");
            println!("{:?}", response)
        }
    }
}
