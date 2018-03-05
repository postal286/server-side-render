export default `
  input[type="text"],
  input[type="password"],
  textarea {
    outline: none;
    box-shadow:none !important;
    border:1px solid #ccc !important;
  }
  
  label[for]:hover {
    cursor: pointer
  }
  
  input::-webkit-input-placeholder       {opacity: 1; font-weight: 400; color: #667784; font-size: 16px; line-height: 1.13; transition: all 0.4s ease;}
  input::-moz-placeholder                {opacity: 1; font-weight: 400; color: #667784; font-size: 16px; transition: all 0.4s ease;}
  input:-moz-placeholder                 {opacity: 1; font-weight: 400; color: #667784; font-size: 16px; transition: all 0.4s ease;}
  input:-ms-input-placeholder            {opacity: 1; font-weight: 400; color: #667784; font-size: 16px; line-height: 1.13; transition: all 0.4s ease;}
  input:focus::-webkit-input-placeholder {opacity: 0; transition: all 0.3s ease;}
  input:focus::-moz-placeholder          {opacity: 0; transition: all 0.3s ease;}
  input:focus:-moz-placeholder           {opacity: 0; transition: all 0.3s ease;}
  input:focus:-ms-input-placeholder      {opacity: 0; transition: all 0.3s ease;}
  
  input[type=number] {
    -moz-appearance:textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input:focus,
  input:active {
    outline:none;
    background-color: #fff;
    border: solid 1px #48bbff;
  }
  
  // Editor styles
  
  .rdw-option-wrapper {
    border: 1px solid #F1F1F1;
    padding: 5px;
    min-width: 25px;
    height: 20px;
    border-radius: 2px;
    margin: 0 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    text-transform: capitalize;
  }
  .rdw-option-wrapper:hover {
    box-shadow: 1px 1px 0px #BFBDBD;
  }
  .rdw-option-wrapper:active {
    box-shadow: 1px 1px 0px #BFBDBD inset;
  }
  .rdw-option-active {
    box-shadow: 1px 1px 0px #BFBDBD inset;
  }
  .rdw-option-disabled {
    opacity: 0.3;
    cursor: default;
  }
  .rdw-dropdown-wrapper {
    height: 30px;
    background: white;
    cursor: pointer;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    margin: 0 3px;
    text-transform: capitalize;
    background: white;
  }
  .rdw-dropdown-wrapper:focus {
    outline: none;
  }
  .rdw-dropdown-wrapper:hover {
    box-shadow: 1px 1px 0px #BFBDBD;
    background-color: #FFFFFF;
  }
  .rdw-dropdown-wrapper:active {
    box-shadow: 1px 1px 0px #BFBDBD inset;
  }
  .rdw-dropdown-carettoopen {
    height: 0px;
    width: 0px;
    position: absolute;
    top: 35%;
    right: 10%;
    border-top: 6px solid black;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
  .rdw-dropdown-carettoclose {
    height: 0px;
    width: 0px;
    position: absolute;
    top: 35%;
    right: 10%;
    border-bottom: 6px solid black;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
  .rdw-dropdown-selectedtext {
    display: flex;
    position: relative;
    height: 100%;
    align-items: center;
    padding: 0 5px;
  }
  .rdw-dropdown-optionwrapper {
    z-index: 100;
    position: relative;
    border: 1px solid #F1F1F1;
    width: 98%;
    background: white;
    border-radius: 2px;
    margin: 0;
    padding: 0;
    max-height: 250px;
    overflow-y: scroll;
  }
  .rdw-dropdown-optionwrapper:hover {
    box-shadow: 1px 1px 0px #BFBDBD;
    background-color: #FFFFFF;
  }
  .rdw-dropdownoption-default {
    min-height: 25px;
    display: flex;
    align-items: center;
    padding: 0 5px;
  }
  .rdw-dropdownoption-highlighted {
    background: #F1F1F1;
  }
  .rdw-dropdownoption-active {
    background: #f5f5f5;
  }
  .rdw-dropdownoption-disabled {
    opacity: 0.3;
    cursor: default;
  }
  .rdw-inline-wrapper {
    display: flex;
    margin: 0 5px;
    align-items: center;
    margin-bottom: 6px;
  }
  .rdw-inline-wrapper > div {
    padding: 6px;
  }
  .rdw-inline-dropdown {
    width: 50px;
  }
  .rdw-inline-dropdownoption {
    height: 40px;
    display: flex;
    justify-content: center;
  }
  .rdw-block-wrapper {
    display: flex;
    margin: 0 5px;
    align-items: center;
    margin-bottom: 6px;
  }
  .rdw-block-dropdown {
    width: 110px;
  }
  .rdw-fontsize-wrapper {
    display: flex;
    margin: 0 5px;
    align-items: center;
    margin-bottom: 6px;
  }
  .rdw-fontsize-dropdown {
    min-width: 40px;
  }
  .rdw-fontsize-option {
    display: flex;
    justify-content: center;
  }
  .rdw-fontfamily-wrapper {
    display: flex;
    margin: 0 5px;
    align-items: center;
    margin-bottom: 6px;
  }
  .rdw-fontfamily-dropdown {
    width: 115px;
  }
  .rdw-fontfamily-placeholder {
    white-space: nowrap;
    max-width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .rdw-fontfamily-optionwrapper {
    width: 140px;
  }
  .rdw-list-wrapper {
    display: flex;
    margin: 0 5px;
    align-items: center;
    margin-bottom: 6px;
  }
  .rdw-list-wrapper > div {
    padding: 5px;
  }
  .rdw-list-dropdown {
    width: 50px;
    z-index: 90;
  }
  .rdw-list-dropdownOption {
    height: 40px;
    display: flex;
    justify-content: center;
  }
  .rdw-text-align-wrapper {
    display: flex;
    margin: 0 5px;
    align-items: center;
    margin-bottom: 6px;
  }
  .rdw-text-align-wrapper > div {
    padding: 5px;
  }
  .rdw-text-align-dropdown {
    width: 50px;
    z-index: 90;
  }
  .rdw-text-align-dropdownOption {
    height: 40px;
    display: flex;
    justify-content: center;
  }
  .rdw-right-aligned-block {
    text-align: right;
  }
  .rdw-left-aligned-block {
    text-align: left !important;
  }
  .rdw-center-aligned-block {
    text-align: center !important;
  }
  .rdw-justify-aligned-block {
    text-align: justify !important;
  }
  .rdw-right-aligned-block > div {
    display: inline-block;
  }
  .rdw-left-aligned-block > div {
    display: inline-block;
  }
  .rdw-center-aligned-block > div {
    display: inline-block;
  }
  .rdw-justify-aligned-block > div {
    display: inline-block;
  }
  .rdw-colorpicker-wrapper {
    display: flex;
    margin: 0 5px;
    align-items: center;
    margin-bottom: 6px;
    position: relative;
  }
  .rdw-colorpicker-wrapper > div {
    padding: 5px;
  }
  .rdw-colorpicker-modal {
    position: absolute;
    top: 35px;
    left: 5px;
    display: flex;
    flex-direction: column;
    width: 175px;
    height: 175px;
    border: 1px solid #F1F1F1;
    padding: 15px;
    border-radius: 2px;
    z-index: 100;
    background: white;
    box-shadow: 3px 3px 5px #BFBDBD;
  }
  .rdw-colorpicker-modal-header {
    display: flex;
    padding-bottom: 5px;
  }
  .rdw-colorpicker-modal-style-label {
    font-size: 15px;
    width: 50%;
    text-align: center;
    cursor: pointer;
    padding: 0 10px 5px;
  }
  .rdw-colorpicker-modal-style-label-active {
    border-bottom: 2px solid #0a66b7;
  }
  .rdw-colorpicker-modal-options {
    margin: 5px auto;
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    overflow: scroll;
  }
  .rdw-colorpicker-cube {
    width: 22px;
    height: 22px;
    border: 1px solid #F1F1F1;
  }
  .rdw-colorpicker-option {
    margin: 3px;
    padding: 0;
    min-height: 20px;
    border: none;
    width: 22px;
    height: 22px;
    min-width: 22px;
    box-shadow: 1px 2px 1px #BFBDBD inset;
  }
  .rdw-colorpicker-option:hover {
    box-shadow: 1px 2px 1px #BFBDBD;
  }
  .rdw-colorpicker-option:active {
    box-shadow: -1px -2px 1px #BFBDBD;
  }
  .rdw-colorpicker-option-active {
    box-shadow: 0px 0px 2px 2px #BFBDBD;
  }
  .rdw-link-wrapper {
    display: flex;
    margin: 0 5px;
    align-items: center;
    margin-bottom: 6px;
    position: relative;
  }
  .rdw-link-wrapper > div {
    padding: 5px;
  }
  .rdw-link-dropdown {
    width: 50px;
  }
  .rdw-link-dropdownOption {
    height: 40px;
    display: flex;
    justify-content: center;
  }
  .rdw-link-dropdownPlaceholder {
    margin-left: 8px;
  }
  .rdw-link-modal {
    position: absolute;
    top: 35px;
    left: 5px;
    display: flex;
    flex-direction: column;
    width: 235px;
    height: 235px;
    border: 1px solid #F1F1F1;
    padding: 15px;
    border-radius: 2px;
    z-index: 100;
    background: white;
    box-shadow: 3px 3px 5px #BFBDBD;
  }
  .rdw-link-modal-label {
    font-size: 15px;
  }
  .rdw-link-modal-input {
    margin-top: 5px;
    border-radius: 2px;
    border: 1px solid #F1F1F1;
    height: 25px;
    margin-bottom: 15px;
    padding: 0 5px;
  }
  .rdw-link-modal-input:focus {
    outline: none;
  }
  .rdw-link-modal-buttonsection {
    margin: 0 auto;
  }
  .rdw-link-modal-target-option {
    margin-bottom: 20px;
  }
  .rdw-link-modal-target-option > span {
    margin-left: 5px;
  }
  .rdw-link-modal-btn {
    margin-left: 10px;
    width: 75px;
    height: 30px;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    cursor: pointer;
    background: white;
    text-transform: capitalize;
  }
  .rdw-link-modal-btn:hover {
    box-shadow: 1px 1px 0px #BFBDBD;
  }
  .rdw-link-modal-btn:active {
    box-shadow: 1px 1px 0px #BFBDBD inset;
  }
  .rdw-link-modal-btn:focus {
    outline: none !important;
  }
  .rdw-link-modal-btn:disabled {
    background: #ece9e9;
  }
  .rdw-link-dropdownoption {
    height: 40px;
    display: flex;
    justify-content: center;
  }
  .rdw-history-dropdown {
    width: 50px;
  }
  .rdw-embedded-wrapper {
    display: flex;
    margin: 0 5px;
    align-items: center;
    margin-bottom: 6px;
    position: relative;
  }
  .rdw-embedded-wrapper > div {
    padding: 5px;
  }
  .rdw-embedded-modal {
    position: absolute;
    top: 35px;
    left: 5px;
    display: flex;
    flex-direction: column;
    width: 235px;
    height: 180px;
    border: 1px solid #F1F1F1;
    padding: 15px;
    border-radius: 2px;
    z-index: 100;
    background: white;
    justify-content: space-between;
    box-shadow: 3px 3px 5px #BFBDBD;
  }
  .rdw-embedded-modal-header {
    font-size: 15px;
    display: flex;
  }
  .rdw-embedded-modal-header-option {
    width: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .rdw-embedded-modal-header-label {
    width: 95px;
    border: 1px solid #f1f1f1;
    margin-top: 5px;
    background: #6EB8D4;
    border-bottom: 2px solid #0a66b7;
  }
  .rdw-embedded-modal-link-section {
    display: flex;
    flex-direction: column;
  }
  .rdw-embedded-modal-link-input {
    width: 88%;
    height: 35px;
    margin: 10px 0;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    font-size: 15px;
    padding: 0 5px;
  }
  .rdw-embedded-modal-link-input-wrapper {
    display: flex;
    align-items: center;
  }
  .rdw-embedded-modal-link-input:focus {
    outline: none;
  }
  .rdw-embedded-modal-btn-section {
    display: flex;
    justify-content: center;
  }
  .rdw-embedded-modal-btn {
    margin: 0 3px;
    width: 75px;
    height: 30px;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    cursor: pointer;
    background: white;
    text-transform: capitalize;
  }
  .rdw-embedded-modal-btn:hover {
    box-shadow: 1px 1px 0px #BFBDBD;
  }
  .rdw-embedded-modal-btn:active {
    box-shadow: 1px 1px 0px #BFBDBD inset;
  }
  .rdw-embedded-modal-btn:focus {
    outline: none !important;
  }
  .rdw-embedded-modal-btn:disabled {
    background: #ece9e9;
  }
  .rdw-embedded-modal-size {
    align-items: center;
    display: flex;
    margin: 8px 0;
    justify-content: space-between;
  }
  .rdw-embedded-modal-size-input {
    width: 80%;
    height: 20px;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    font-size: 12px;
  }
  .rdw-embedded-modal-size-input:focus {
    outline: none;
  }
  .rdw-emoji-wrapper {
    display: flex;
    margin: 0 5px;
    align-items: center;
    margin-bottom: 6px;
    position: relative;
  }
  .rdw-emoji-wrapper > div {
    padding: 5px;
  }
  .rdw-emoji-modal {
    overflow: auto;
    position: absolute;
    top: 35px;
    left: 5px;
    display: flex;
    flex-wrap: wrap;
    width: 235px;
    height: 180px;
    border: 1px solid #F1F1F1;
    padding: 15px;
    border-radius: 2px;
    z-index: 100;
    background: white;
    box-shadow: 3px 3px 5px #BFBDBD;
  }
  .rdw-emoji-icon {
    margin: 2.5px;
    height: 24px;
    width: 24px;
    cursor: pointer;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rdw-spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .rdw-spinner > div {
    width: 12px;
    height: 12px;
    background-color: #333;
  
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }
  .rdw-spinner .rdw-bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .rdw-spinner .rdw-bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
  }
  @keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
  .rdw-image-wrapper {
    display: flex;
    margin: 0 5px;
    align-items: center;
    margin-bottom: 6px;
    position: relative;
  }
  .rdw-image-wrapper > div {
    padding: 5px;
  }
  .rdw-image-modal {
    position: absolute;
    top: 35px;
    left: 5px;
    display: flex;
    flex-direction: column;
    width: 235px;
    border: 1px solid #F1F1F1;
    padding: 15px;
    border-radius: 2px;
    z-index: 100;
    background: white;
    box-shadow: 3px 3px 5px #BFBDBD;
  }
  .rdw-image-modal-header {
    font-size: 15px;
    margin: 10px 0;
    display: flex;
  }
  .rdw-image-modal-header-option {
    width: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .rdw-image-modal-header-label {
    width: 80px;
    background: #f1f1f1;
    border: 1px solid #f1f1f1;
    margin-top: 5px;
  }
  .rdw-image-modal-header-label-highlighted {
    background: #6EB8D4;
    border-bottom: 2px solid #0a66b7;
  }
  .rdw-image-modal-upload-option {
    width: 100%;
    color: gray;
    cursor: pointer;
    display: flex;
    border: none;
    font-size: 15px;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;
    outline: 2px dashed gray;
    outline-offset: -10px;
    margin: 10px 0;
    padding: 9px 0;
  }
  .rdw-image-modal-upload-option-highlighted {
    outline: 2px dashed #0a66b7;
  }
  .rdw-image-modal-upload-option-label {
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }
  .rdw-image-modal-upload-option-label span{
    padding: 0 20px;
  }
  .rdw-image-modal-upload-option-image-preview {
    max-width: 100%;
    max-height: 200px;
  }
  .rdw-image-modal-upload-option-input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .rdw-image-modal-url-section {
    display: flex;
    align-items: center;
  }
  .rdw-image-modal-url-input {
    width: 90%;
    height: 35px;
    margin: 15px 0 12px;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    font-size: 15px;
    padding: 0 5px;
  }
  .rdw-image-modal-btn-section {
    margin: 10px auto 0;
  }
  .rdw-image-modal-url-input:focus {
    outline: none;
  }
  .rdw-image-modal-btn {
    margin: 0 5px;
    width: 75px;
    height: 30px;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    cursor: pointer;
    background: white;
    text-transform: capitalize;
  }
  .rdw-image-modal-btn:hover {
    box-shadow: 1px 1px 0px #BFBDBD;
  }
  .rdw-image-modal-btn:active {
    box-shadow: 1px 1px 0px #BFBDBD inset;
  }
  .rdw-image-modal-btn:focus {
    outline: none !important;
  }
  .rdw-image-modal-btn:disabled {
    background: #ece9e9;
  }
  .rdw-image-modal-spinner {
    position: absolute;
    top: -3px;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
  .rdw-image-modal-alt-input {
    width: 70%;
    height: 20px;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    font-size: 12px;
    margin-left: 5px;
  }
  .rdw-image-modal-alt-input:focus {
    outline: none;
  }
  .rdw-image-modal-alt-lbl {
    font-size: 12px;
  }
  .rdw-image-modal-size {
    align-items: center;
    display: flex;
    margin: 8px 0;
    justify-content: space-between;
  }
  .rdw-image-modal-size-input {
    width: 40%;
    height: 20px;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    font-size: 12px;
  }
  .rdw-image-modal-size-input:focus {
    outline: none;
  }
  .rdw-image-mandatory-sign {
    color: red;
    margin-left: 3px;
    margin-right: 3px;
  }
  .rdw-remove-wrapper {
    display: flex;
    margin: 0 5px;
    align-items: center;
    margin-bottom: 6px;
    position: relative;
  }
  .rdw-remove-wrapper > div {
    padding: 5px;
  }
  .rdw-history-wrapper {
    display: flex;
    margin: 0 5px;
    align-items: center;
    margin-bottom: 6px;
  }
  .rdw-history-wrapper > div {
    padding: 5px;
  }
  .rdw-history-dropdownoption {
    height: 40px;
    display: flex;
    justify-content: center;
  }
  .rdw-history-dropdown {
    width: 50px;
  }
  .rdw-link-decorator-wrapper {
    position: relative;
  }
  .rdw-link-decorator-icon {
    position: absolute;
    left: 40%;
    top: 0;
    cursor: pointer;
    background-color: white;
  }
  .rdw-mention-link {
    text-decoration: none;
    color: #1236ff;
    background-color: #f0fbff;
    padding: 1px 2px;
    border-radius: 2px;
  }
  .rdw-suggestion-wrapper {
    position: relative;
  }
  .rdw-suggestion-dropdown {
    position: absolute;
    display: flex;
    flex-direction: column;
    border: 1px solid #F1F1F1;
    min-width: 100px;
    max-height: 150px;
    overflow: auto;
    background: white;
    z-index: 100;
  }
  .rdw-suggestion-option {
    padding: 7px 5px;
    border-bottom: 1px solid #f1f1f1;
  }
  .rdw-suggestion-option-active {
    background-color: #F1F1F1;
  }
  .rdw-hashtag-link {
    text-decoration: none;
    color: #1236ff;
    background-color: #f0fbff;
    padding: 1px 2px;
    border-radius: 2px;
  }
  .rdw-image-alignment-options-popup {
    position: absolute;;
    background: white;
    display: flex;
    padding: 5px 2px;
    border-radius: 2px;
    border: 1px solid #F1F1F1;
    width: 105px;
    cursor: pointer;
    z-index: 100;
  }
  .rdw-alignment-option-left {
    justify-content: flex-start;
  }
  .rdw-image-alignment-option {
    height: 15px;
    width: 15px;
    min-width: 15px;
  }
  .rdw-image-alignment {
    position: relative;
  }
  .rdw-image-imagewrapper {
    position: relative;
  }
  .rdw-image-center {
    display: flex;
    justify-content: center;
  }
  .rdw-image-left {
    display: flex;
  }
  .rdw-image-right {
    display: flex;
    justify-content: flex-end;
  }
  .rdw-image-alignment-options-popup-right {
    right: 0;
  }
  .rdw-editor-main {
    height: 100%;
    border-radius: 2px;
    border: 1px solid #c0c0c0;
    overflow: auto;
    min-height: 400px;
    box-sizing: border-box;
  }
  .rdw-editor-toolbar {
    padding: 6px 5px 0;
    border-radius: 2px;
    border: 1px solid #c0c0c0;
    display: flex;
    justify-content: flex-start;
    background: white;
    flex-wrap: wrap;
    font-size: 15px;
    margin-bottom: 5px;
    user-select: none;
  }
  .rdw-editor-wrapper:focus {
    outline: none;
  }
  .rdw-editor-wrapper {
    box-sizing: content-box;
  }
  .rdw-editor-main blockquote {
    border-left: 5px solid #f1f1f1;
    padding-left: 5px;
  }
  .rdw-editor-main pre {
    background: #f1f1f1;
    border-radius: 3px;
    padding: 1px 10px;
  }/**
   * Draft v0.9.1
   *
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */
  .DraftEditor-editorContainer,.DraftEditor-root,.public-DraftEditor-content{height:inherit;text-align:initial}.public-DraftEditor-content[contenteditable=true]{-webkit-user-modify:read-write-plaintext-only}.DraftEditor-root{position:relative;margin:1em;}.DraftEditor-editorContainer{background-color:rgba(255,255,255,0);border-left:.1px solid transparent;position:relative;z-index:1}.public-DraftEditor-block{position:relative}.DraftEditor-alignLeft .public-DraftStyleDefault-block{text-align:left}.DraftEditor-alignLeft .public-DraftEditorPlaceholder-root{left:0;text-align:left}.DraftEditor-alignCenter .public-DraftStyleDefault-block{text-align:center}.DraftEditor-alignCenter .public-DraftEditorPlaceholder-root{margin:0 auto;text-align:center;width:100%}.DraftEditor-alignRight .public-DraftStyleDefault-block{text-align:right}.DraftEditor-alignRight .public-DraftEditorPlaceholder-root{right:0;text-align:right}.public-DraftEditorPlaceholder-root{color:#9197a3;position:absolute;z-index:0}.public-DraftEditorPlaceholder-hasFocus{color:#bdc1c9}.DraftEditorPlaceholder-hidden{display:none}.public-DraftStyleDefault-block{position:relative;white-space:pre-wrap}.public-DraftStyleDefault-ltr{direction:ltr;text-align:left}.public-DraftStyleDefault-rtl{direction:rtl;text-align:right}.public-DraftStyleDefault-listLTR{direction:ltr}.public-DraftStyleDefault-listRTL{direction:rtl}.public-DraftStyleDefault-ol,.public-DraftStyleDefault-ul{margin:16px 0;padding:0}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR{margin-left:1.5em}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL{margin-right:1.5em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR{margin-left:3em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL{margin-right:3em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR{margin-left:4.5em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL{margin-right:4.5em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR{margin-left:6em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL{margin-right:6em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR{margin-left:7.5em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL{margin-right:7.5em}.public-DraftStyleDefault-unorderedListItem{list-style-type:square;position:relative}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0{list-style-type:disc}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1{list-style-type:circle}.public-DraftStyleDefault-orderedListItem{list-style-type:none;position:relative}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before{left:-36px;position:absolute;text-align:right;width:30px}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before{position:absolute;right:-36px;text-align:left;width:30px}.public-DraftStyleDefault-orderedListItem:before{content:counter(ol0) ". ";counter-increment:ol0}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before{content:counter(ol1) ". ";counter-increment:ol1}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before{content:counter(ol2) ". ";counter-increment:ol2}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before{content:counter(ol3) ". ";counter-increment:ol3}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before{content:counter(ol4) ". ";counter-increment:ol4}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset{counter-reset:ol0}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset{counter-reset:ol1}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset{counter-reset:ol2}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset{counter-reset:ol3}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset{counter-reset:ol4}
  
  /*# sourceMappingURL=react-draft-wysiwyg.css.map*/
  
  // End of Editor Styles
  
  // Datepicker Styles
  
  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    margin-left: -8px;
    position: absolute;
  }
  
  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    box-sizing: content-box;
    position: absolute;
    border: 8px solid transparent;
    height: 0;
    width: 1px;
  }
  
  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    content: "";
    z-index: -1;
    border-width: 8px;
    left: -8px;
    border-bottom-color: #aeaeae;
  }
  
  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
    top: 0;
    margin-top: -8px;
  }
  
  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
    border-top: none;
    border-bottom-color: #f0f0f0;
  }
  
  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
    top: -1px;
    border-bottom-color: #aeaeae;
  }
  
  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    bottom: 0;
    margin-bottom: -8px;
  }
  
  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    border-bottom: none;
    border-top-color: #fff;
  }
  
  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    bottom: -1px;
    border-top-color: #aeaeae;
  }
  
  .react-datepicker-wrapper {
    display: inline-block;
  }
  
  .react-datepicker {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.8rem;
    background-color: #fff;
    color: #000;
    border: 1px solid #aeaeae;
    border-radius: 0.3rem;
    display: inline-block;
    position: relative;
  }
  
  .react-datepicker__triangle {
    position: absolute;
    left: 50px;
  }
  
  .react-datepicker-popper {
    z-index: 1;
  }
  
  .react-datepicker-popper[data-placement^="bottom"] {
    margin-top: 10px;
  }
  
  .react-datepicker-popper[data-placement^="top"] {
    margin-bottom: 10px;
  }
  
  .react-datepicker-popper[data-placement^="right"] {
    margin-left: 8px;
  }
  
  .react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {
    left: auto;
    right: 42px;
  }
  
  .react-datepicker-popper[data-placement^="left"] {
    margin-right: 8px;
  }
  
  .react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
    left: 42px;
    right: auto;
  }
  
  .react-datepicker__header {
    text-align: center;
    background-color: #f0f0f0;
    border-bottom: 1px solid #aeaeae;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    padding-top: 8px;
    position: relative;
  }
  
  .react-datepicker__header--time {
    padding-bottom: 8px;
    padding-left: 5px;
    padding-right: 5px;
  }
  
  .react-datepicker__year-dropdown-container--select,
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__month-year-dropdown-container--select,
  .react-datepicker__year-dropdown-container--scroll,
  .react-datepicker__month-dropdown-container--scroll,
  .react-datepicker__month-year-dropdown-container--scroll {
    display: inline-block;
    margin: 0 2px;
  }
  
  .react-datepicker__current-month,
  .react-datepicker-time__header {
    margin-top: 0;
    color: #000;
    font-weight: bold;
    font-size: 0.944rem;
  }
  
  .react-datepicker-time__header {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  
  .react-datepicker__navigation {
    background: none;
    line-height: 1.7rem;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 10px;
    width: 0;
    padding: 0;
    border: 0.45rem solid transparent;
    z-index: 1;
  }
  
  .react-datepicker__navigation--previous {
    left: 10px;
    border-right-color: #ccc;
  }
  
  .react-datepicker__navigation--previous:hover {
    border-right-color: #b3b3b3;
  }
  
  .react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover {
    border-right-color: #e6e6e6;
    cursor: default;
  }
  
  .react-datepicker__navigation--next {
    right: 10px;
    border-left-color: #ccc;
  }
  
  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 80px;
  }
  
  .react-datepicker__navigation--next:hover {
    border-left-color: #b3b3b3;
  }
  
  .react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover {
    border-left-color: #e6e6e6;
    cursor: default;
  }
  
  .react-datepicker__navigation--years {
    position: relative;
    top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  
  .react-datepicker__navigation--years-previous {
    top: 4px;
    border-top-color: #ccc;
  }
  
  .react-datepicker__navigation--years-previous:hover {
    border-top-color: #b3b3b3;
  }
  
  .react-datepicker__navigation--years-upcoming {
    top: -4px;
    border-bottom-color: #ccc;
  }
  
  .react-datepicker__navigation--years-upcoming:hover {
    border-bottom-color: #b3b3b3;
  }
  
  .react-datepicker__month-container {
    float: left;
  }
  
  .react-datepicker__month {
    margin: 0.4rem;
    text-align: center;
  }
  
  .react-datepicker__time-container {
    float: right;
    border-left: 1px solid #aeaeae;
    width: 70px;
  }
  
  .react-datepicker__time-container--with-today-button {
    display: inline;
    border: 1px solid #aeaeae;
    border-radius: 0.3rem;
    position: absolute;
    right: -72px;
    top: 0;
  }
  
  .react-datepicker__time-container .react-datepicker__time {
    position: relative;
    background: white;
  }
  
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
    width: 70px;
    overflow-x: hidden;
    margin: 0 auto;
    text-align: center;
  }
  
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
    list-style: none;
    margin: 0;
    height: calc(195px + (1.7rem / 2));
    overflow-y: scroll;
    padding-right: 30px;
    width: 100%;
    box-sizing: content-box;
  }
  
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
    padding: 5px 10px;
  }
  
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }
  
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background-color: #216ba5;
    color: white;
    font-weight: bold;
  }
  
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
    background-color: #216ba5;
  }
  
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {
    color: #ccc;
  }
  
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {
    cursor: default;
    background-color: transparent;
  }
  
  .react-datepicker__week-number {
    color: #ccc;
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
  }
  
  .react-datepicker__week-number.react-datepicker__week-number--clickable {
    cursor: pointer;
  }
  
  .react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
    border-radius: 0.3rem;
    background-color: #f0f0f0;
  }
  
  .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap;
  }
  
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #000;
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
  }
  
  .react-datepicker__day {
    cursor: pointer;
  }
  
  .react-datepicker__day:hover {
    border-radius: 0.3rem;
    background-color: #f0f0f0;
  }
  
  .react-datepicker__day--today {
    font-weight: bold;
  }
  
  .react-datepicker__day--highlighted {
    border-radius: 0.3rem;
    background-color: #3dcc4a;
    color: #fff;
  }
  
  .react-datepicker__day--highlighted:hover {
    background-color: #32be3f;
  }
  
  .react-datepicker__day--highlighted-custom-1 {
    color: magenta;
  }
  
  .react-datepicker__day--highlighted-custom-2 {
    color: green;
  }
  
  .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range {
    border-radius: 0.3rem;
    background-color: #216ba5;
    color: #fff;
  }
  
  .react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover {
    background-color: #1d5d90;
  }
  
  .react-datepicker__day--keyboard-selected {
    border-radius: 0.3rem;
    background-color: #2a87d0;
    color: #fff;
  }
  
  .react-datepicker__day--keyboard-selected:hover {
    background-color: #1d5d90;
  }
  
  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
    background-color: rgba(33, 107, 165, 0.5);
  }
  
  .react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {
    background-color: #f0f0f0;
    color: #000;
  }
  
  .react-datepicker__day--disabled {
    cursor: default;
    color: #ccc;
  }
  
  .react-datepicker__day--disabled:hover {
    background-color: transparent;
  }
  
  .react-datepicker__input-container {
    position: relative;
    display: inline-block;
  }
  
  .react-datepicker__input-container > input {
    padding: .5rem;
    border-radius: 5px;
  }
  
  .react-datepicker__year-read-view,
  .react-datepicker__month-read-view,
  .react-datepicker__month-year-read-view {
    border: 1px solid transparent;
    border-radius: 0.3rem;
  }
  
  .react-datepicker__year-read-view:hover,
  .react-datepicker__month-read-view:hover,
  .react-datepicker__month-year-read-view:hover {
    cursor: pointer;
  }
  
  .react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {
    border-top-color: #b3b3b3;
  }
  
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    border-top-color: #ccc;
    float: right;
    margin-left: 20px;
    top: 8px;
    position: relative;
    border-width: 0.45rem;
  }
  
  .react-datepicker__year-dropdown,
  .react-datepicker__month-dropdown,
  .react-datepicker__month-year-dropdown {
    background-color: #f0f0f0;
    position: absolute;
    width: 50%;
    left: 25%;
    top: 30px;
    z-index: 1;
    text-align: center;
    border-radius: 0.3rem;
    border: 1px solid #aeaeae;
  }
  
  .react-datepicker__year-dropdown:hover,
  .react-datepicker__month-dropdown:hover,
  .react-datepicker__month-year-dropdown:hover {
    cursor: pointer;
  }
  
  .react-datepicker__year-dropdown--scrollable,
  .react-datepicker__month-dropdown--scrollable,
  .react-datepicker__month-year-dropdown--scrollable {
    height: 150px;
    overflow-y: scroll;
  }
  
  .react-datepicker__year-option,
  .react-datepicker__month-option,
  .react-datepicker__month-year-option {
    line-height: 20px;
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  
  .react-datepicker__year-option:first-of-type,
  .react-datepicker__month-option:first-of-type,
  .react-datepicker__month-year-option:first-of-type {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }
  
  .react-datepicker__year-option:last-of-type,
  .react-datepicker__month-option:last-of-type,
  .react-datepicker__month-year-option:last-of-type {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
  
  .react-datepicker__year-option:hover,
  .react-datepicker__month-option:hover,
  .react-datepicker__month-year-option:hover {
    background-color: #ccc;
  }
  
  .react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,
  .react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,
  .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {
    border-bottom-color: #b3b3b3;
  }
  
  .react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,
  .react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,
  .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {
    border-top-color: #b3b3b3;
  }
  
  .react-datepicker__year-option--selected,
  .react-datepicker__month-option--selected,
  .react-datepicker__month-year-option--selected {
    position: absolute;
    left: 15px;
  }
  
  .react-datepicker__close-icon {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: inline-block;
    height: 0;
    outline: 0;
    padding: 0;
    vertical-align: middle;
  }
  
  .react-datepicker__close-icon::after {
    background-color: #216ba5;
    border-radius: 50%;
    bottom: 0;
    box-sizing: border-box;
    color: #fff;
    content: "\\00d7";
    cursor: pointer;
    font-size: 12px;
    height: 16px;
    width: 16px;
    line-height: 1;
    margin: -8px auto 0;
    padding: 2px;
    position: absolute;
    right: 7px;
    text-align: center;
    top: 50%;
  }
  
  .react-datepicker__today-button {
    background: #f0f0f0;
    border-top: 1px solid #aeaeae;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    padding: 5px 0;
    clear: left;
  }
  
  .react-datepicker__portal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 2147483647;
  }
  
  .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__day,
  .react-datepicker__portal .react-datepicker__time-name {
    width: 3rem;
    line-height: 3rem;
  }
  
  @media (max-width: 400px), (max-height: 550px) {
    .react-datepicker__portal .react-datepicker__day-name,
    .react-datepicker__portal .react-datepicker__day,
    .react-datepicker__portal .react-datepicker__time-name {
      width: 2rem;
      line-height: 2rem;
    }
  }
  
  .react-datepicker__portal .react-datepicker__current-month,
  .react-datepicker__portal .react-datepicker-time__header {
    font-size: 1.44rem;
  }
  
  .react-datepicker__portal .react-datepicker__navigation {
    border: 0.81rem solid transparent;
  }
  
  .react-datepicker__portal .react-datepicker__navigation--previous {
    border-right-color: #ccc;
  }
  
  .react-datepicker__portal .react-datepicker__navigation--previous:hover {
    border-right-color: #b3b3b3;
  }
  
  .react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {
    border-right-color: #e6e6e6;
    cursor: default;
  }
  
  .react-datepicker__portal .react-datepicker__navigation--next {
    border-left-color: #ccc;
  }
  
  .react-datepicker__portal .react-datepicker__navigation--next:hover {
    border-left-color: #b3b3b3;
  }
  
  .react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {
    border-left-color: #e6e6e6;
    cursor: default;
  }
  
  // End of Datepicker Styles
  
`;