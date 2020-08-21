
const ENV = {
    env: "production",

    storeDetails: {
        appName: 'SimpliBot',
        appStoreId: 123123123,
        appStoreLocale: 'us',
        playStoreId: 'com.SimpliBot.app'
    },
    version: {
        ios: 1,
        android: 1
    },
    development: {
        environment: 'development',
        allowTextFontScaling: true,
        useFixtures: false,
        yellowBox: false,
        includeExamples: __DEV__,
    },
    staging: {
        environment: 'development',
        allowTextFontScaling: true,
        useFixtures: false,
        yellowBox: false,
        includeExamples: __DEV__,
    },
    production: {
        environment: 'development',
        allowTextFontScaling: true,
        useFixtures: false,
        yellowBox: false,
        includeExamples: __DEV__,
    }
}

export const config = (env = ENV.env) => {
    if (env === "development") {
        return ENV.development;
    } else if (env === 'staging') {
        return ENV.staging;
    } else if (env === 'production') {
        return ENV.production;
    }
};

export const version = () => {
    return ENV.version;
}

export const getAppStoreDetails = () => {
    return ENV.storeDetails;
}