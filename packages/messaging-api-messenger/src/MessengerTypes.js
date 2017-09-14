/* @flow */

import fs from 'fs';

export type UserID = string;

export type RecipientWithID = {
  id: UserID,
};

export type RecipientWithPhoneNumber = {
  phone_number: string,
  name?: Object,
};

export type Recipient = RecipientWithID | RecipientWithPhoneNumber;

export type AttachmentPayload = {
  url?: string,
  is_reusable?: boolean,
  attachment_id?: string,
};

export type Attachment = {
  type: string,
  payload: AttachmentPayload,
};

export type TextOrAttachment =
  | {
      text: string,
    }
  | {
      attachment: Attachment,
    };

export type Message = {
  text?: ?string,
  attachment?: ?Attachment,
};

export type Tag = 'SHIPPING_UPDATE' | 'RESERVATION_UPDATE' | 'ISSUE_RESOLUTION';

export type SendOption = {
  tag: Tag,
};

export type TemplateButton = {
  type: string,
  title: string,
  url?: string,
  payload?: string,
  webview_height_ratio?: 'compact' | 'tall' | 'full',
};

export type MenuItem = TemplateButton;

export type TemplateElement = {
  title: string,
  image_url: string,
  subtitle: string,
  default_action: {
    type: string,
    url: string,
    messenger_extensions: boolean,
    webview_height_ratio: string,
    fallback_url: string,
  },
  buttons: Array<TemplateButton>,
};

export type OpenGraphElement = {
  url: string,
  buttons?: Array<TemplateButton>,
};

export type Address = {
  street_1: string,
  street_2?: ?string,
  city: string,
  postal_code: string,
  state: string,
  country: string,
};

export type Summary = {
  subtotal?: ?number,
  shipping_cost?: ?number,
  total_tax?: ?number,
  total_cost: number,
};

export type Adjustment = {
  name?: ?string,
  ammont?: ?number,
};

export type ReceiptAttributes = {
  recipient_name: string,
  merchant_name?: ?string,
  order_number: string, // must be unique
  currency: string,
  payment_method: string,
  timestamp?: ?string,
  order_url?: ?string,
  elements?: ?Array<TemplateElement>,
  address?: ?Address,
  summary: Summary,
  adjustments?: ?Array<Adjustment>,
};

export type Airport = {
  airport_code: string,
  city: string,
  terminal?: string,
  gate?: string,
};

export type FlightSchedule = {
  boarding_time?: string,
  departure_time: string,
  arrival_time?: string,
};

export type FlightInfo = {
  flight_number: string,
  departure_airport: Airport,
  arrival_airport: Airport,
  flight_schedule: FlightSchedule,
};

export type Field = {
  label: string,
  value: string,
};

export type BoardingPass = {
  passenger_name: string,
  pnr_number: string,
  travel_class?: string,
  seat?: string,
  auxiliary_fields?: Array<Field>,
  secondary_fields?: Array<Field>,
  logo_image_url: string,
  header_image_url?: string,
  header_text_field?: Field,
  qr_code?: string, // FIXME: qr_code or barcode_image_url
  barcode_image_url?: string,
  above_bar_code_image_url: string,
  flight_info: FlightInfo,
};

export type AirlineBoardingPassAttributes = {
  intro_message: string,
  locale: string,
  boarding_pass: Array<BoardingPass>,
};

export type PassengerInfo = {
  passenger_id: string,
  ticket_number?: string,
  name: string,
};

export type PassengerSegmentInfo = {
  segment_id: string,
  passenger_id: string,
  seat: string,
  seat_type: string,
  product_info?: string,
};

export type PriceInfo = {
  title: string,
  ammont: number,
  currency?: string,
};

export type AirlineCheckinAttributes = {
  intro_message: string,
  locale: string,
  theme_color?: string,
  pnr_number: string,
  passenger_info: Array<PassengerInfo>,
  flight_info: Array<FlightInfo>,
  passenger_segment_info: Array<PassengerSegmentInfo>,
  price_info?: Array<PriceInfo>,
  base_price?: number,
  tax?: number,
  total_price: number,
  currency: string,
};

export type AirlineItineraryAttributes = {};

export type AirlineFlightUpdateAttributes = {};

export type QuickReply = {
  content_type: 'text' | 'location',
  title?: string,
  payload?: string,
  image_url?: string,
};

export type SenderAction = string;

export type User = {
  first_name: string,
  last_name: string,
  profile_pic: string,
  locale: string,
  timezone: number,
  gender: string,
};

export type PersistentMenu = Array<{
  locale: string,
  composer_input_disabled: boolean,
  call_to_actions: Array<MenuItem>,
}>;

export type GreetingConfig = {
  locale: string,
  text: string,
};

export type MessengerProfile = {
  get_started?: {
    payload: string,
  },
  persistent_menu?: PersistentMenu,
  greeting?: Array<{
    locale: string,
    text: string,
  }>,
  whitelisted_domains?: Array<string>,
  account_linking_url?: string,
  payment_settings?: {
    privacy_url?: string,
    public_key?: string,
    test_users?: Array<string>,
  },
  target_audience?: {
    audience_type?: string,
    countries?: {
      whitelist: ?Array<string>,
      blacklist: ?Array<string>,
    },
  },
};

export type MessengerProfileResponse = {
  data: Array<MessengerProfile>,
};

export type MutationSuccessResponse = {
  result: string,
};

export type SendMessageSucessResponse = {
  recipient_id: string,
  message_id: string,
};

export type SendSenderActionResponse = {
  recipient_id: string,
};

export type MessageTag =
  | 'SHIPPING_UPDATE'
  | 'RESERVATION_UPDATE'
  | 'ISSUE_RESOLUTION'
  | 'APPOINTMENT_UPDATE'
  | 'GAME_EVENT'
  | 'TRANSPORTATION_UPDATE'
  | 'FEATURE_FUNCTIONALITY_UPDATE'
  | 'TICKET_UPDATE';

export type MessageTagResponse = Array<{
  tag: MessageTag,
  description: string,
}>;

export type FileData = Buffer | fs.ReadStream;

export type BatchItem = {
  method: string,
  relative_url: string,
  name?: string,
  body?: string,
};

export type NLPConfig = {
  nlp_enabled?: boolean,
  custom_token?: string,
};
