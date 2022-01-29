---
layout: post
title: "Spectral Analysis"

tags: []
comments: false
author: ZexWoo
toc: true
---

**Spectral analysis** is a visual way to display the data in a music file. Every music note has a specific **frequency**: lower notes have lower frequencies and higher notes have higher frequencies. All of the frequencies are displayed on a **spectral diagram** (“**spectral**” for short), which is a graph of all the frequencies vs. time in a music file. Frequencies are measured in hertz (Hz) and kilohertz (1,000 Hz). Humans have a hearing range from about 20 Hz ~ 20 kHz (20,000 Hz).

Since spectrals show all the data in a file, they are helpful tools to use when you’re trying to decide whether or not a song has been transcoded. Every file has a relatively standard frequency cut-off.

**Click on any of the spectrals below to view it in a higher resolution.**

## CD / LOSSLESS

Songs on a retail CD and lossless songs have frequencies that extend all the way to 22 kHz. Since lossless to lossless transcoding preserves all of the data in a music file, the spectral of a lossless song will look the same in FLAC, WAV (PCM), ALAC, etc.

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-FLAC.jpg)

However, different genres have different-looking spectrals. The example above was a pop song, so most of the frequencies were represented. But look at this classical piano song.

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-FLAC-Classical.jpg)

It looks much different, right? But it’s still a lossless spectral! Notice how “white noise” (the light purple) still extends to 22 kHz, even though those frequencies aren’t used.

## MP3

Different types of MP3s have different frequency cut-offs. MP3s also tend to have a “shelf” at 16 kHz (you’ll see it in the spectrals).

<center>MP3 320kbps (CBR) has a frequency cut-off at 20.5 kHz.</center>

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-MP3-320-CBR.jpg)

<center>MP3 256kbps (CBR) has a frequency cut-off at 20 kHz.</center>

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-MP3-256-CBR.jpg)

<center>MP3 V0 has a frequency cut-off at 19.5 kHz.</center>

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-MP3-V0.jpg)

<center>MP3 192kbps (CBR) has a frequency cut-off at 19 kHz.</center>

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-MP3-192-CBR.jpg)

<center>MP3 V2 has a frequency cut-off at 18.5 kHz.</center>

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-MP3-V2.jpg)

<center>MP3 128kbps (CBR) has a frequency cut-off at 16 kHz.</center>

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-MP3-128-CBR.jpg)

## TRANSCODES

How are spectrals helpful when trying to detect transcodes? Say you download a song in FLAC from a blog. The only way to verify that this song is truly a lossless file and not a transcoded file is by looking at its spectral. (Programs like AudioIdentifier are not reliable at detecting transcodes.)

For example, the spectral below is of a FLAC file: the file extension is .flac, it is 21.8 MB, and it sounds okay.

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Guide-MP3-192-to-FLAC.jpg)

But whoa, does that look anything like what a regular FLAC spectral should look like? No! This file was transcoded from MP3 192kbps (CBR) to FLAC. It’s a lossy to lossless transcode, which is bad.

## PROGRAMS

For spectral analysis, we recommend using either [Adobe Audition](https://www.adobe.com/products/audition.html) (Windows or macOS), [Audacity](http://audacity.sourceforge.net/) (Windows, macOS, Linux), and [SoX](http://sox.sourceforge.net/) (Windows, macOS, Linux — command line only). All of the spectrals that appear in this guide were viewed in Adobe Audition CS 6.

Although you should use spectral analysis to determine whether a file is a transcode or not, you will need to use another program to first determine what bitrate or encoding preset the file claims to be. For this purpose, we recommend using [Audio Identifier](https://download.cnet.com/Audio-Identifier/3000-2141_4-10703771.html) or [dbPowerAmp](http://www.dbpoweramp.com/) on Windows and [dnuos](https://bitheap.org/dnuos/) or [MediaInfo](http://mediainfo.sourceforge.net/en) on macOS.