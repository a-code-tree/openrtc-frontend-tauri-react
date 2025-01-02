import * as fs from '@tauri-apps/api/fs';
import * as shell from '@tauri-apps/api/shell';
import { invoke } from '@tauri-apps/api/tauri'
import { appWindow } from '@tauri-apps/api/window'

function toggleFullscreen() {
    appWindow.isFullscreen().then(x => appWindow.setFullscreen(!x));
}