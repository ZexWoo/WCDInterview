---
layout: post
title: "频谱分析"

tags: []
comments: false
author: ZexWoo
toc: true
---

**频谱分析**是以可视的方式展现音频文件的数据。每个音调都有其特定的**频率**：低音频率低，高音频率高。所有的这些频率都会被展现在**频谱图**（简称「**spectral**」）上，其纵轴是频率，横轴是曲目时长。频率以赫兹（Hz）和千赫兹（kHz）为单位。人类的听力范围大约是从 20 Hz ~ 20 kHz。

由于频谱图展示了文件的所有数据，因而它是你判断音频是否劣质转码的好帮手。每个文件都有一个相对标准的截止频率。

**右键→「在新标签页中打开图像」以查看原图。**

## CD／无损

零售 CD 中的歌曲以及无损歌曲，其频率应全程冲到 22 kHz。由于无损格式之间的转码保留了所有的数据，FLAC、WAV（PCM）、ALAC 等的频谱看起来应是完全相同的。

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-FLAC.jpg)

不过，不同的流派的频谱看起来不尽相同。上例是一首流行歌曲，所以多数频率表现都很明亮。但古典钢琴曲的视觉表现：

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-FLAC-Classical.jpg)

看起来差好多，是吧？但它仍然是无损的频谱！注意「白噪音」（紫光）仍然延伸到 22 kHz，即使它们没能派上用场。

## MP3

不同类型的 MP3 具有不同的截断频率（frequency cut-off）。MP3 也倾向于在 16 kHz 处带有一个 “隔断（shelf）”（你可以在频谱图上看到）。

<center>MP3 320kbps (CBR) 的频率截断在 20.5 kHz。</center>

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-MP3-320-CBR.jpg)

<center>MP3 256kbps (CBR) 的频率截断在 20 kHz。</center>

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-MP3-256-CBR.jpg)

<center>MP3 V0 的频率截断在 19.5 kHz。</center>

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-MP3-V0.jpg)

<center>MP3 192kbps (CBR) 的频率截断在 19 kHz。</center>

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-MP3-192-CBR.jpg)

<center>MP3 V2 的频率截断在 18.5 kHz。</center>

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-MP3-V2.jpg)

<center>MP3 128kbps (CBR) 的频率截断在 16 kHz。</center>

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-MP3-128-CBR.jpg)

## 劣质转码

在尝试判别劣质转码时频谱是怎样发挥作用的？比方说你从一个博主处下载了一首 FLAC 格式的歌。鉴定它是真无损而非劣质转码文件的唯一办法就是查看它的频谱。（像 AudioIdentifier 这样的程序在检测劣质转码时并不可靠。）

举个例子，如下的频谱来自一个 FLAC 文件：文件扩展名是 .flac，大小 21.8 MB，且听起来没啥毛病。

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-MP3-192-to-FLAC.jpg)

但是……哇哦，它看起来像是正常的 FLAC 频谱应有的样子吗？显然不是嘛！这个文件是从 MP3 192kbps (CBR) 转码成 FLAC 的。它是有损到无损的转码，即劣质转码。

## 程序

对于频谱分析，我们推荐 [Adobe Audition](http://www.adobe.com/products/audition.html) (Windows 或 macOS)、[Audacity](http://audacityteam.org/) (Windows、macOS、Linux) 或 [SoX](http://sox.sourceforge.net/) (Windows、macOS、Linux — 仅命令行) 中的任意一者。以上示例中的频谱图是使用 Adobe Audition CS 6 制作的。

虽然说你应当使用频谱分析来判断一个文件是否劣质转码，但你首先需要采用另一类软件来查看文件的比特率或编码预设。要达到这个目的，我们推荐 Windows 用户使用 [Audio Identifier](https://download.cnet.com/Audio-Identifier/3000-2141_4-10703771.html) 或 [dbPowerAmp](http://www.dbpoweramp.com/)，macOS 用户使用 [dnuos](https://bitheap.org/dnuos/) 或 [MediaInfo](https://mediaarea.net/zh-CN/MediaInfo)。