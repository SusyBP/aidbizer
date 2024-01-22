
export const validator =  {
  methods: {
    isValidEmail(email: string) {
        const regExp = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return email.match(regExp) != null;
    },
    isValidPhone(cellphone: string) {
        const regExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        return cellphone.match(regExp) != null || cellphone=="";
    },
    isValidZipcode(zip: string) {
        const regExp = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
        return zip.match(regExp) != null || zip=="";
    }
  }
}
