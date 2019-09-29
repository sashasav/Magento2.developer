var config = {
    map: {
        '*': {
            select2: 'js/select2.full',
            owl: 'js/owl.carousel'
        }
    },
    deps: [
        'js/mainScripts'
    ],
    shim: {
        'select2': {
            'deps': ['jquery']
        },
        'owl': {
            'deps': ['jquery']
        }
    },
    config: {
        mixins: {
            'js/removeCopyright': {
                'js/removeCopyrightMixin': true
            }
        }
    }
};
