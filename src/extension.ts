'use strict';

import { ExtensionContext, commands } from "vscode";
import { WhyBClient } from "./whyb_client";

export let savedContext: ExtensionContext;

let client: WhyBClient;

function startClient() {
	client = new WhyBClient();
}

function restartClient() {
	if (client != undefined) {
		client.stop();
	}
	startClient();
}

export function activate(context: ExtensionContext) {
	savedContext = context;
	savedContext.subscriptions.push(commands.registerCommand("yodyvs.restartWhyBClient", restartClient));
	restartClient();
}

export function deactivate() {
}
