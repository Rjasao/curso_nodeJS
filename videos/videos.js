//const fs = require('fs');
const spawn = require('child_process').spawn;
const parent = process.argv[2];
let videos = [];

if(process.argv[2]){
    // Parent Path
    const start = parseInt(process.argv[3]);
    const end = parseInt(process.argv[4]);
    for (let i = start; i <= end; i++) {
        videos.push(i);
    }
    videos.reverse();
    processVideos();
}else{
    // Parent Path is required
    console.log('A pasta pai é necessária');
}

function resize(video, quality){
    const p = new Promise((resolve, reject)=>{
        const ffmpeg = spawn('./ffmpeg-arq/ffmpeg',[
        //const ffmpeg = spawn('./ffmpeg/bin/ffmpeg.exec',[
            '-i', 
            `${parent}/${video}.mp4`, 
            '-codec:v', 
            'libx264', 
            '-profile:v', 
            'main', 
            '-preset', 
            'slow', 
            '-b:v', 
            '400k', 
            '-maxrate', 
            '400k', 
            '-bufsize', 
            '800k', 
            '-vf', 
            `scale=-2:${quality}`, 
            '-threads', 
            '0', 
            '-b:a', 
            '128k', 
            //`${parent}/resultado/${video}_${quality}.mp4`,
            `./video-compac/${video}_${quality}.mp4`,
        ])

        ffmpeg.stderr.on('data', (data) => {
            console.log(`${data}`);
        });
        ffmpeg.on('close', (code) => {
            resolve();
        });
    });
    return p;
}



async function processVideos(){
    let video = videos.pop()
    if(video){
        try {
            await resize(video, 720)
            await resize(video, 480)
            await resize(video, 360)
            await resize(video, 240)
            await resize(video, 144)

            console.log(`Vídeos renderizados - ${video}`)
            processVideos()

        } catch (e) {
            console.log(e)
            
        }
    }

}

