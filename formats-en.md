---
layout: post
title: "Audio Formats"

tags: []
comments: false
author: ZexWoo
toc: true
---

An **audio format** is a type of computer file that stores music. Music formats are either uncompressed lossless, compressed lossless, or lossy.

## BITRATES

A bitrate is the number of bits conveyed or transferred in a unit of time. When talking about music formats, bitrate is used in **kilobits per second (kbps)**. When comparing files with different bitrates (of the same song), the file with the higher bitrate has the higher quality.

For example, an MP3 320kbps (CBR) file transfers 320 kilobits per second.

## UNCOMPRESSED LOSSLESS

**Uncompressed lossless formats** store all of the original recorded data. Since silence is given the same number of bits per second as sound is, uncompressed lossless files are huge. The main uncompressed lossless format is pulse-code modulation (PCM).

*Examples*
- WAV (PCM) (used on Windows)
- AIFF (PCM) (used on macOS)

## COMPRESSED LOSSLESS

**Compressed lossless formats** store all of the original recorded data in less space than uncompressed lossless formats by compressing the data. By giving silence almost no bits per second and compressing sound, a compressed lossless file is usually half as big as the same song stored in an uncompressed lossless file.

Since both uncompressed lossless formats and compressed lossless formats retain all the data from the original recording, they can be transcoded between each other without a loss in quality.

*Examples*
- Free Lossless Audio Codec (FLAC)
- Apple Lossless Audio Codec (ALAC)
- Monkey’s Audio (APE)

## LOSSY

**Lossy formats** are always compressed. Lossy formats have smaller file sizes than both uncompressed lossless formats and compressed lossless formats because they remove some of the original data. Usually the removed data is in the higher frequencies that humans can’t hear, however, there can be obvious audible differences between lossy formats and lossless formats.

Because lossy formats remove data during compression (and thus lose quality), lossy formats **CANNOT** be transcoded to lossless formats or other lossy formats without losing more quality.

*Examples*
- MPEG Layer 3 Audio (MP3)
- Advanced Audio Encoding (AAC)
- Windows Media Audio (WMA)
- Dolby Digital Audio Codec 3 (AC3)
- DTS Coherent Acoustics Codec (DTS)

## FILE SIZE

Here’s an example of how the file size of the same song varies depending on whether the song’s format is uncompressed lossless, compressed lossless, or lossy. Let’s take the classic pop song, Sk8er Boi by Avril Lavigne. For reference, the song is 3 minutes, 24 seconds long.

**Uncompressed Lossless — WAV (PCM):** 34.3 MB

**Compressed Lossless — FLAC:** 25.75 MB (25% compressed)

**Lossy — MP3 320 (CBR):** 7.78 MB (78% compressed)

## TRANSPARENCY

**Transparency** is a term used to describe the audible quality of a lossy music file. A lossy file is considered transparent if the average human cannot tell the difference between the lossy file and a lossless file of the same song by just listening to both without knowing which file is which.

For most people, MP3 192kbps (CBR) is considered transparent.

## ALLOWED FORMATS

While there are several types of lossless and lossy music formats, only a few are allowed to be uploaded to What.CD.

*Allowed Lossless Formats*
- FLAC

Because lossless formats can be transcoded between each other without a loss in quality, the only allowed lossless format on What.CD is FLAC. However, you can download the FLAC and convert to ALAC (for iTunes) or whatever lossless or lossy format you prefer.

*Allowed Lossy Formats*
- MP3 (the minimum bitrate for MP3 is 192kbps (CBR))
- AAC (can be trumped by any MP3 torrent unless it was bought from the iTunes store and includes iTunes Exclusive tracks)
- AC3 (usually found in DVDs)
- DTS (usually found in DVDs)

MP3 is the most popular lossy format on What.CD. We allow AAC files bought from the iTunes store because there are often iTunes-specific bonus tracks, and since AAC is lossy it cannot be converted to other formats without a loss in quality. Similarly, AC3 and DTS are music formats often found on DVDs and since they are lossy, they cannot be converted to other formats without a loss in quality.