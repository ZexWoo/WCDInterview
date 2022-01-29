---
layout: post
title: "音频格式"

tags: []
comments: false
author: ZexWoo
toc: true
---

**音频格式**就是一类能够存储音乐的电脑文件。它分为无压缩、无损压缩、有损压缩三类。

## 比特率

[比特率](https://baike.baidu.com/item/%E6%AF%94%E7%89%B9%E7%8E%87/1022775) 指的是单位时间传输或处理的比特数，单位是**千比特每秒（kbps）**。在比较不同比特率的文件时（对于同一首歌），更高的比特率一般意味着更优的质量。

比如，一个 MP3 320kbps (CBR) 文件每秒传输 320 千比特。

## 无压缩（Uncompressed Lossless）

**无压缩格式**存储了原始录音的所有数据。即使静音部分也被一视同仁地赋予与有声部分完全相同的比特率。无压缩文件是很庞大的。主流的无压缩格式采用**脉冲编码调制（PCM）**。

*比如：*
- WAV (PCM)（用于 Windows）
- AIFF (PCM)（用于 macOS）

## 无损压缩（Compressed Lossless）

**无损压缩格式**也存储了原始录音的所有数据，但由于压缩了数据，它所占用的空间比之无压缩格式要少。通过 “剥夺” 静音部分的比特率 “份额” 以及压缩有声部分占用的比特率，对于同一首歌，无损压缩文件通常是无压缩文件的一半大小。

由于无压缩和无损压缩格式都保留了原始录音的所有数据，因此它们是可以互相转换而没有任何损耗的。

*比如：*
- Free Lossless Audio Codec (FLAC)
- Apple Lossless Audio Codec (ALAC)
- Monkey's Audio (APE)

## 有损压缩（Lossy）

**有损格式**总是经过压缩的。有损格式的文件大小小于前两者，因为它抛弃了一部分原始数据。通常被抛弃的数据处于人类无法察觉的高频，但是，有损和无损格式之间是有可能存在明显的可听差异的。

由于有损格式在压缩过程中损失了数据（及质量），它就**无法**被无进一步损失地转码到无损格式或其他有损格式。

*比如：*
- MPEG Layer 3 Audio (MP3)
- Advanced Audio Encoding (AAC)
- Windows Media Audio (WMA)
- Dolby Digital Audio Codec 3 (AC3)
- DTS Coherent Acoustics Codec (DTS)

## 文件大小

下面是一个例子，展示了同一首歌在无压缩、无损压缩、有损压缩三种格式下得到的文件大小。示例是经典的流行歌曲， Avril Lavigne 的 Sk8er Boi，长 3 分 24 秒。

**无压缩 — WAV (PCM):** 34.3 MB

**无损压缩 — FLAC:** 25.75 MB (25% 被压缩)

**有损压缩 — MP3 320 (CBR):** 7.78 MB (78% 被压缩)

## 透明性（Transparency）

**透明性**用以描述有损音频文件的可听质量。如果一个有损音频文件听起来和无损没差，即普通人不能区分两者，那么就可以认为该文件是透明的。

对于大多数人来说，192 kbps 的 MP3 文件是透明的。

## 允许格式

虽说格式有那么多种，但是 What.CD 允许的格式只有其中的一部分。

*允许的无损格式：*
- FLAC

由于无损格式之间可以互相无损转换，在 What.CD 推荐的无损格式只有 FLAC，同时也允许 WAV、DFF、DSF。如果你想要 ALAC（用于苹果设备）或是别的无损或有损格式，你可自行转码。

*允许的有损格式：*
- MP3 (MP3 的最低比特率是 192kbps (CBR))
- AAC (除非它来自 iTunes 且包含 iTunes 独占的曲目，否则就可以被 MP3 替代)
- AC3 (通常来自 DVD)
- DTS (通常来自 DVD)

MP3 是在 What.CD 最为流行的有损格式。我们允许购买自 iTunes 的 AAC 是因为它通常包含 iTunes 的特典音轨，且 AAC 是不能再次转码到其他格式的有损格式。同理，AC3 和 DTS 这一对通常来自 DVD 的好兄弟也是有损的，也不能被无损耗地转换成其他格式。