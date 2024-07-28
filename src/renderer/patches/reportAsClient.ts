/*
 * SPDX-License-Identifier: GPL-3.0
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

import { Settings } from "renderer/settings";

import { addPatch } from "./shared";

if (Settings.store.reportAsClient)
    addPatch({
        patches: [
            {
                find: "_doIdentify(){",
                replacement: {
                    match: /(let c=\{.*properties:)(l)/,
                    replace: '$1{...$2, browser: "Discord Client"}'
                }
            }
        ]
    });
