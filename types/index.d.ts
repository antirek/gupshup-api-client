
export interface Address {
  city: string;
  country: string;
  countryCode: string;
  state: string;
  street: string;
  type: string;
  zip: string;
}

export interface Email {
  email: string;
  type: string;
}

export interface Name {
  firstName: string;
  formattedName: string;
  lastName: string;
}

export interface Phone {
  phone: string;
  type: string;
  wa_id: string;
}

export interface ContactCard {
  name: Name;
  addresses: Address[];
  emails: Email[];
  phones: Phone[];
}

export interface GupshupAPIClientConfig {
  API_KEY: string;
  APP_NAME: string;
  SOURCE_MOBILE_NUMBER: string;
}

interface GlobalButton {
  type: string;
  title: string;
}

interface ListMessageItemOption {
  type: string;
  title: string;
  description: string;
  postbackText: string;
}

interface ListMessageItem {
  title: string;
  options: ListMessageItemOption[];
}

export interface ListMessage {
  title: string,
  body: string,
  msgid: string,
  globalButtons: GlobalButton[],
  items: ListMessageItem[],
}