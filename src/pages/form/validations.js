import { required, maxLength } from "vuelidate/lib/validators";

const isValidYear = value=> {
    const fourDigitRegex = /^\d{4}$/;
    return fourDigitRegex.test(value);
}

export const validations = {
    form: {
        name: {
            firstName: {
                required,
                maxLength: maxLength(10),
            },
            lastName: {
                required,
                maxLength: maxLength(20)
            },
        },
        phoneNumber: {
            required,
            isValidPhone: function(value) {
                const phoneRegex = /^09\d{8}$/;
                return phoneRegex.test(value);
            }
        },
        workExperienceYears: {
            values: {
                required: function(value){
                    return !!value.length;
                }
            }
        },
        term: {
            startYear: {
                required,
                isValidYear
            },
            startMonth: {
                required: function(value){
                    return !!value.length;
                }
            },
            endYear: {
                required,
                isValidYear,
                isYearGreaterThanStartYear: function(value) {
                    const yearValue = parseInt(value, 10);
                    return !this.form.term.startYear || yearValue >= this.form.term.startYear;
                }
            },
            endMonth: {
                required: function(value){
                    return !!value.length;
                }
            },
        }
    }
};