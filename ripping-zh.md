---
layout: post
title: "CD 抓轨与刻录"

tags: []
comments: false
author: ZexWoo
toc: false
---

**CD 抓轨**是一种提取 CD 中的音频文件的方式。**CD 刻录**是一种用音频文件制作 CD 的方式。

## Log 文件

**Log 文件**是以 `.log` 为扩展名的文本文件。文件如其名，它是记录了整个抓轨进程以及可能发生的错误的一份日志。你不能以任何理由修改它，因为这严重违反了规则，会导致被警告／失去发布权限／封号。对于发种，Log 文件并非必须。点击 [这里](/WCDInterview/log-zh.md/) 查看 Log 文件示例。

## Cue 文件

**Cue 文件**是以 `.cue` 为扩展名的文本文件。它的作用是作为 CD 内容的目录，允许你刻录一份和原 CD 一致的 CD 复制品。点击 [这里](/WCDInterview/cue-zh.md/) 查看 Cue 文件示例。

## 推荐的 CD 抓轨软件

What.CD 推荐 Windows 或 Linux 用户（通过 Wine）使用 [Exact Audio Copy (EAC)](https://zexwoo.github.io/exact_audio_copy_guide/)，macOS 用户使用 [X Lossless Decoder (XLD)](https://zexwoo.github.io/x_lossless_decoder_guide/)。两者都能提供优质抓轨和足够详细的 Log 以证明抓轨所得的文件是否达到了标准。