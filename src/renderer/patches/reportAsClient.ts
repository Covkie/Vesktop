/*
 * SPDX-License-Identifier: GPL-3.0
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

import { addPatch } from "./shared";

addPatch({
    patches: [
        {
            find: "_doIdentify(){",
            replacement: {
                // eslint-disable-next-line no-useless-escape
                match: /(let \i=\{.*properties:)(\i)/,
                replace: '$1{...$2, browser: "Discord Client"}'
            }
        }
    ]
});
