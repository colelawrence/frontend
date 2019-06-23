import * as React from 'react'

/** @param {{ color: string }} props */
export const SummaryIcon = ({ color }) =>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2H18C19.1 2 20 2.9 20 4V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2ZM11 4H6V12L8.5 10.5L11 12V4Z" fill={color} />
    </svg>

/** @param {{ color: string }} props */
export const DetailsIcon = ({ color }) =>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.005 5.17749C13.455 4.07749 15.555 3.67749 17.505 3.67749C18.955 3.67749 20.495 3.89749 21.775 4.46749C22.505 4.79749 22.995 5.50749 22.995 6.31749V17.5975C22.995 18.9075 21.775 19.8675 20.515 19.5375C19.535 19.2875 18.495 19.1775 17.495 19.1775C15.935 19.1775 14.275 19.4275 12.935 20.0975C12.345 20.3975 11.665 20.3975 11.065 20.0975C9.72501 19.4375 8.065 19.1775 6.505 19.1775C5.505 19.1775 4.465 19.2875 3.485 19.5375C2.225 19.8575 1.005 18.8975 1.005 17.5975V6.31749C1.005 5.50749 1.495 4.79749 2.225 4.46749C3.515 3.89749 5.05501 3.67749 6.505 3.67749C8.455 3.67749 10.555 4.07749 12.005 5.17749ZM19.805 17.3875C20.425 17.4975 21.005 17.0375 21.005 16.4075V6.93749C21.005 6.46749 20.665 6.05749 20.205 5.95749C19.335 5.76749 18.425 5.67749 17.505 5.67749C15.805 5.67749 13.355 6.32749 12.005 7.17749V18.6875C13.355 17.8375 15.805 17.1875 17.505 17.1875C18.275 17.1875 19.055 17.2475 19.805 17.3875Z" fill={color} />
    </svg>

/** @param {{ color: string }} props */
export const HistoryIcon = ({ color }) =>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.14401 12.0017C4.14401 6.95172 8.31401 2.86172 13.404 3.00172C18.094 3.13172 22.014 7.05172 22.144 11.7417C22.284 16.8317 18.194 21.0017 13.144 21.0017C11.054 21.0017 9.14401 20.2917 7.62401 19.0917C7.15401 18.7317 7.12401 18.0217 7.54401 17.6017C7.90401 17.2417 8.46401 17.2117 8.86401 17.5217C10.044 18.4517 11.534 19.0017 13.144 19.0017C17.044 19.0017 20.194 15.8117 20.144 11.9017C20.094 8.18172 16.964 5.05172 13.244 5.00172C9.32401 4.95172 6.14401 8.10172 6.14401 12.0017H7.93401C8.38401 12.0017 8.60401 12.5417 8.29401 12.8517L5.50401 15.6517C5.30401 15.8517 4.99401 15.8517 4.79401 15.6517L2.00401 12.8517C1.68401 12.5417 1.90401 12.0017 2.35401 12.0017H4.14401ZM12.144 8.75172C12.144 8.34172 12.484 8.00172 12.894 8.00172C13.304 8.00172 13.644 8.34172 13.644 8.74172V12.1417L16.524 13.8517C16.874 14.0617 16.994 14.5217 16.784 14.8817C16.574 15.2317 16.114 15.3517 15.754 15.1417L12.634 13.2917C12.334 13.1117 12.144 12.7817 12.144 12.4317V8.75172Z" fill={color} />
    </svg>

/** @param {{ color: string }} props */
export const SettingsIcon = ({ color }) =>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5022 12C19.5022 12.34 19.4722 12.66 19.4322 12.98L21.5422 14.63C21.7322 14.78 21.7822 15.05 21.6622 15.27L19.6622 18.73C19.5422 18.95 19.2822 19.04 19.0522 18.95L16.5622 17.95C16.0422 18.34 15.4822 18.68 14.8722 18.93L14.4922 21.58C14.4622 21.82 14.2522 22 14.0022 22H10.0022C9.75222 22 9.54222 21.82 9.51222 21.58L9.13222 18.93C8.52222 18.68 7.96222 18.35 7.44222 17.95L4.95222 18.95C4.73222 19.03 4.46222 18.95 4.34222 18.73L2.34222 15.27C2.22222 15.05 2.27222 14.78 2.46222 14.63L4.57222 12.98C4.53222 12.66 4.50222 12.33 4.50222 12C4.50222 11.67 4.53222 11.34 4.57222 11.02L2.46222 9.37C2.27222 9.22 2.21222 8.95 2.34222 8.73L4.34222 5.27C4.46222 5.05 4.72222 4.96 4.95222 5.05L7.44222 6.05C7.96222 5.66 8.52222 5.32 9.13222 5.07L9.51222 2.42C9.54222 2.18 9.75222 2 10.0022 2H14.0022C14.2522 2 14.4622 2.18 14.4922 2.42L14.8722 5.07C15.4822 5.32 16.0422 5.65 16.5622 6.05L19.0522 5.05C19.2722 4.97 19.5422 5.05 19.6622 5.27L21.6622 8.73C21.7822 8.95 21.7322 9.22 21.5422 9.37L19.4322 11.02C19.4722 11.34 19.5022 11.66 19.5022 12ZM8.50222 12C8.50222 13.93 10.0722 15.5 12.0022 15.5C13.9322 15.5 15.5022 13.93 15.5022 12C15.5022 10.07 13.9322 8.5 12.0022 8.5C10.0722 8.5 8.50222 10.07 8.50222 12Z" fill={color} />
    </svg>


/** @param {{ color: string }} props */
export const DataTextIcon = ({ color }) =>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.005 5.17749C13.455 4.07749 15.555 3.67749 17.505 3.67749C18.955 3.67749 20.495 3.89749 21.775 4.46749C22.505 4.79749 22.995 5.50749 22.995 6.31749V17.5975C22.995 18.9075 21.775 19.8675 20.515 19.5375C19.535 19.2875 18.495 19.1775 17.495 19.1775C15.935 19.1775 14.275 19.4275 12.935 20.0975C12.345 20.3975 11.665 20.3975 11.065 20.0975C9.72501 19.4375 8.065 19.1775 6.505 19.1775C5.505 19.1775 4.465 19.2875 3.485 19.5375C2.225 19.8575 1.005 18.8975 1.005 17.5975V6.31749C1.005 5.50749 1.495 4.79749 2.225 4.46749C3.515 3.89749 5.05501 3.67749 6.505 3.67749C8.455 3.67749 10.555 4.07749 12.005 5.17749ZM19.805 17.3875C20.425 17.4975 21.005 17.0375 21.005 16.4075V6.93749C21.005 6.46749 20.665 6.05749 20.205 5.95749C19.335 5.76749 18.425 5.67749 17.505 5.67749C15.805 5.67749 13.355 6.32749 12.005 7.17749V18.6875C13.355 17.8375 15.805 17.1875 17.505 17.1875C18.275 17.1875 19.055 17.2475 19.805 17.3875Z" fill={color} />
    </svg>

/** @param {{ color: string }} props */
export const DataNumberIcon = ({ color }) =>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM16.58 7.58L17.99 9L9.99 17L5.99 13.01L7.41 11.6L9.99 14.17L16.58 7.58Z" fill={color} />
    </svg>

/** @param {{ color: string }} props */
export const DataBooleanIcon = ({ color }) =>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.84375 12.9941H6.95605V3H5.21972L2 5.56347L3.01855 6.83496L4.16699 5.91211C4.30371 5.80273 4.54752 5.57259 4.89843 5.22168L4.86425 6.26074L4.84375 7.21093V12.9941ZM15.0137 16.1377H8.02734V14.668L10.5361 12.1318C11.279 11.3708 11.7643 10.8444 11.9922 10.5527C12.22 10.2565 12.3841 9.98307 12.4844 9.73242C12.5846 9.48177 12.6348 9.222 12.6348 8.95312C12.6348 8.55208 12.5231 8.25358 12.2998 8.05762C12.0811 7.86165 11.7871 7.76367 11.418 7.76367C11.0306 7.76367 10.6546 7.85254 10.29 8.03027C9.92545 8.20801 9.54492 8.46093 9.14844 8.78906L8 7.42871C8.49219 7.00944 8.90006 6.71322 9.22363 6.54004C9.5472 6.36686 9.90039 6.2347 10.2832 6.14355C10.666 6.04785 11.0944 6 11.5684 6C12.1927 6 12.7441 6.11393 13.2227 6.3418C13.7012 6.56966 14.0726 6.88867 14.3369 7.29883C14.6012 7.70898 14.7334 8.17838 14.7334 8.70703C14.7334 9.16731 14.6514 9.60026 14.4873 10.0059C14.3278 10.4069 14.0771 10.8193 13.7353 11.2432C13.3981 11.667 12.8011 12.2708 11.9443 13.0547L10.6592 14.2646V14.3603H15.0137V16.1377ZM21.624 12.3789C21.624 13.0033 21.4349 13.5342 21.0566 13.9717C20.6784 14.4092 20.1475 14.71 19.4639 14.874V14.915C20.2705 15.0153 20.8812 15.2614 21.2959 15.6533C21.7106 16.0407 21.918 16.5648 21.918 17.2256C21.918 18.1872 21.5693 18.9368 20.8721 19.4746C20.1748 20.0078 19.179 20.2744 17.8848 20.2744C16.8001 20.2744 15.8385 20.0944 15 19.7344V17.9365C15.3874 18.1325 15.8135 18.292 16.2783 18.415C16.7432 18.5381 17.2034 18.5996 17.6592 18.5996C18.3564 18.5996 18.8714 18.4811 19.2041 18.2441C19.5368 18.0072 19.7031 17.6266 19.7031 17.1025C19.7031 16.6331 19.5117 16.3004 19.1289 16.1045C18.7461 15.9085 18.1354 15.8105 17.2969 15.8105H16.5381V14.1904H17.3105C18.0853 14.1904 18.6504 14.0902 19.0059 13.8896C19.3659 13.6846 19.5459 13.3359 19.5459 12.8437C19.5459 12.0872 19.0719 11.709 18.124 11.709C17.7959 11.709 17.4609 11.7637 17.1191 11.873C16.7819 11.9824 16.4059 12.1715 15.9912 12.4404L15.0137 10.9844C15.9251 10.3281 17.012 10 18.2744 10C19.3089 10 20.1247 10.2096 20.7217 10.6289C21.3232 11.0482 21.624 11.6315 21.624 12.3789Z" fill={color} />
    </svg>

/** @param {{ color: string }} props */
export const InfoIcon = ({ color }) =>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 1.33334C4.32001 1.33334 1.33334 4.32001 1.33334 8.00001C1.33334 11.68 4.32001 14.6667 8.00001 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00001C14.6667 4.32001 11.68 1.33334 8.00001 1.33334ZM7.33334 4.66668V6.00001H8.66668V4.66668H7.33334ZM7.33334 7.33334V11.3333H8.66668V7.33334H7.33334ZM2.66668 8.00001C2.66668 10.94 5.06001 13.3333 8.00001 13.3333C10.94 13.3333 13.3333 10.94 13.3333 8.00001C13.3333 5.06001 10.94 2.66668 8.00001 2.66668C5.06001 2.66668 2.66668 5.06001 2.66668 8.00001Z" fill={color} />
    </svg>
