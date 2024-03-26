function CheckboxChecked() {
  return (
    <svg
      className="w-6 h-6 hidden peer-checked:block absolute pointer-events-none"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#333333"
    >
      <rect x="0.5" y="0.5" width="23" height="23" stroke="#333333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3949 16.0099C10.763 15.3779 10.8376 14.2784 11.5627 13.5533L19.3993 5.7167C20.1239 4.99211 21.2234 4.91749 21.8554 5.54945C22.4877 6.18183 22.4131 7.28137 21.6885 8.00596L13.8519 15.8426C13.1268 16.5677 12.0273 16.6423 11.3949 16.0099Z"
        fill="#333333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1585 18.719C10.5265 19.351 9.50817 19.3575 8.88334 18.7327L2.13031 11.9797C1.5059 11.3553 1.51246 10.3369 2.14442 9.70495C2.7768 9.07256 3.79517 9.06601 4.41957 9.69041L11.1726 16.4434C11.7974 17.0683 11.7909 18.0866 11.1585 18.719Z"
        fill="#333333"
      />
    </svg>
  );
}

export default CheckboxChecked;
