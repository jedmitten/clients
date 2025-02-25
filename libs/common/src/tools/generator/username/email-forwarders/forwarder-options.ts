export class ForwarderOptions {
  apiKey: string;
  website: string;
  fastmail = new FastmailForwarderOptions();
  anonaddy = new AnonAddyForwarderOptions();
  forwardemail = new ForwardEmailForwarderOptions();
}

export class FastmailForwarderOptions {
  prefix: string;
}

export class AnonAddyForwarderOptions {
  domain: string;
  baseUrl: string;
}

export class ForwardEmailForwarderOptions {
  domain: string;
}
