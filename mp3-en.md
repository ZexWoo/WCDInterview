---
layout: post
title: "MP3"

tags: []
comments: false
author: ZexWoo
toc: false
---

## LAME

**LAME Ain’t An MP3 Encoder (LAME)** is an encoder that converts and compresses any input audio file and outputs an MP3 file. The resulting MP3 file can have a constant, variable, or average bitrate. What.CD recommends LAME as an MP3 encoder because it is open source, customizable, and outputs high quality MP3 files.

## CONSTANT BITRATE (CBR)

When encoding a **constant bitrate (CBR)** file, the user (you) chooses a preset bitrate and LAME targets that bitrate throughout the entire file. This means that every second in the file has the same number of bits, no matter how simple or complex the sound is. Every second in a CBR file has the same quality. Because silence is given the same number of bits as more complex sounds, CBR files are larger than VBR and ABR files of the same quality. This also means that CBR files have a predictable file size.

## VARIABLE BITRATE (VBR)

When encoding a **variable bitrate (VBR)** file, the user (you) chooses a preset quality and LAME targets that quality, letting the bitrate vary throughout the entire file. This means that every second of the file has a different number of bits that depends on how complex the sound is at that second. For example, a second of silence would receive much fewer bits than a second of loud, blaring music. Since VBR files target a certain quality instead of a certain bitrate, exact VBR file sizes are more unpredictable.

LAME has certain **VBR presets** ranging from V0 to V9. V0 is the highest quality VBR preset and V9 is the lowest quality VBR preset. The two most common VBR presets on What.CD are V0 (with a target bitrate of 245kbps) and V2 (with a target bitrate of 190kbps). V2 is the lowest quality LAME VBR preset allowed on What.CD for music torrents.

At a certain VBR preset setting, the average bitrate throughout the file is usually close to the **target bitrate**. However, keep in mind that the target bitrate is just a target — the average bitrate will not necessarily end up near the target bitrate.

## AVERAGE BITRATE (ABR)

When encoding an **average bitrate (ABR)** file, the user (you) chooses a preset bitrate and LAME allows the bitrate to vary throughout the entire file, but the average bitrate of the file will be the bitrate you preset. This means that like CBR, the file size is predictable, and like VBR, the quality and bitrate of the music varies throughout the file depending on how complex the music is each second.

However, ABR is not recommended by What.CD because it is a mix of both CBR and VBR, and it is thus unable to perform well on either. (Jack of all trades but master of none.)