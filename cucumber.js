export default {

    default: {

        require: [

            "features/step-definitions/**/*.js"

        ],

        format: [

            "progress",

            "html:cucumber-report.html"

        ],

        publishQuiet: true

    }

}