export default `
  input[type="text"],
  input[type="password"],
  textarea {
    outline: none;
    box-shadow:none !important;
    border:1px solid #ccc !important;
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
`;