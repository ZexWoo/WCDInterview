---
layout: post
title: "Torrenting"

tags: []
comments: false
author: ZexWoo
toc: true
---

## BITTORRENT

BitTorrent is a system that allows users to share data with each other. Information about the data you want to download is held in a **.torrent file**, and other people who have added the same .torrent file in their torrent client are called **peers**. When you download a file, you are **leeching** from other peers who already have the data. When you finish downloading the file and make yourself available to upload, you are **seeding** the data to other peers. Although you may have many files seeding, you will not receive upload credit until another peer leeches from you. In other words, you will not gain upload credit for just seeding torrents, though your required ratio will be lower than if you were not seeding torrents. It is possible to seed and leech at the same time because BitTorrent clients download chunks of data, and as soon as your BitTorrent client downloads one chunk of data it may be seeded to other peers. BitTorrent uses a specific protocol based on upload speeds and the number of other peers in order to choose which pieces of the torrent to download from which peer.

## CLIENTS

A **BitTorrent client** is a program that allows you to connect to the BitTorrent system. Think of BitTorrent like the internet and BitTorrent clients as internet browsers. There are multiple different internet browsers with different features, but they connect to the same internet. Click [here](/WCDInterview/client-en.md/) for the BitTorrent clients that are on the **whitelist**, or allowed on What.CD. You will not be able to connect to peers from What.CD (and thus download data) if your BitTorrent client is not on the whitelist. If there is an “x” behind a decimal, that means that any number can be substituted for the x. For example: uTorrent 2.0.x means that uTorrent 2.0.0, 2.0.1, 2.0.2, 2.0.3, 2.0.4, etc. are all on the whitelist.

## RATIO

A **ratio** is a comparison between your downloaded and uploaded data (this is also known as a fraction). Dividing the amount of data you have uploaded by the amount of data you have downloaded gives you your ratio. A ratio of 1.0 is healthy because it means you have downloaded as much data as you have uploaded. Ratios significantly under 1.0 are unhealthy because it means that you are not contributing as much to the community as you are taking from it. Ratios significantly above 1.0 are also unhealthy because it means that you are “hoarding” upload instead of giving back to the community by downloading more. We realize that it may be difficult to maintain a ratio on What.CD, so we have a ratio system to help out our users. Your **required ratio** is the ratio you must maintain in order to be able to keep downloading torrents. The required ratio is calculated based on how many torrents you are seeding and how much data you have downloaded.

![](https://opentrackers.org/whatinterviewprep.com/wp-content/uploads/2012/08/Ratio.png)

Notice that your required ratio is much lower if you seed 100% of the torrents you download for at least 72 hours each week. In fact, you would have a required ratio of 0 until you download more than 20 GB if you seed all of your torrents! **NOTE: This does not mean you should only seed for 72 hours.** It is in your interest, particularly as a new user, to seed for as long as possible. This will help maintain your ratio and help keep content available for everyone.

If you fall below your required ratio, you will be put in **ratio watch** for two weeks. If you are unable to improve your ratio in this time period, your **leeching privileges** (ability to download) will be disabled. In order to get your leeching privileges re-enabled, you can fill requests or upload new torrents, as well as continue to seed the torrents you have already downloaded. **DO NOT** upload torrents that are against the rules, like transcodes, mutt rips, or duplicates. Failing to follow the upload rules, especially when you are in ratio watch, will result in a warning. If you download more than 10 GB while on ratio watch, your leeching privileges will be immediately disabled.

## FREELEECH AND NEUTRAL LEECH

Generally the exact amount of data you upload and download is recorded in your ratio. However, this is not so with torrents that are marked freeleech or neutral leech. When a torrent is marked **freeleech**, it means that the amount of data you download from this torrent will not be recorded in your ratio, but the amount of data you upload from this torrent will be recorded in your ratio. On special occasions there may be **Staff Picks** (albums that staff members recommend), which are usually freeleech. Freeleech torrents are a good way to build up your ratio. When a torrent is marked neutral leech, it means that neither the amount of data you download nor the amount of data you upload from this torrent will be recorded in your ratio.

## PORT FORWARDING

**Port forwarding** allows computers on the public internet to connect directly to your computer. Most home internet providers use **Network Address Translation** (NAT) to allow home users to connect as many devices to their router (also known as a modem or wireless unit) as they desire. NAT can also prevent direct connections from the public internet to your computer. Port forwarding tells your router or modem to ensure all requests made on a specific port reach a specific computer inside the NAT. Your BitTorrent client runs on a certain port on your computer (you can assign the port), and by forwarding this port, you make yourself more connectable to other computers. Using port forwarding for connectability increases the chances that your client will upload data to a peer who is leeching.

You can learn more about port forwarding as well as get specific directions on how to set up a port forward on your home router or modem at [Port Forward](http://portfoward.com/). You can test your port forward by using [Can You See Me](http://www.canyouseeme.org/) and putting in your forwarded port number to be tested. You can find which port your BitTorrent client uses under your client’s preferences (for uTorrent: Options > Setup Guide ; for Transmission: Preferences > Network).

## DHT

A **Distributed Hash Table** (DHT) is used by BitTorrent clients to obtain lists of peers without a centralized tracker (What.CD has its own private tracker, as do other private tracker sites). Though DHT can make it quicker for you to leech data on public trackers, DHT is bad for private trackers because it allows peers who are not members of the private tracker to access the torrents on the tracker. DHT should be turned off in your torrent client.

## PARTIAL SEEDERS

A **partial seeder** is a peer who has downloaded and is seeding part of a torrent. The peer looks like a leecher; however, he has no intention of downloading the rest of the torrent. Huge torrents like Rosetta Stone Multi-Language MegaPack (38 GB) and a 30 CD Mozart Box Set (50 GB) often have a large number of partial seeders. These torrents should never be downloaded in an attempt to increase ratio.

## MARKING TORRENTS AS PRIVATE

When creating torrents to upload to a private tracker, there is a box to “mark torrent as private”. You should always check this box, as it keeps peers who are not members of What.CD out of the peer list. This is for your security and that of all the site members.