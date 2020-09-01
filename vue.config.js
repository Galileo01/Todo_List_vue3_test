module.exports = {
    configureWebpack: config => {

        let configuration = {
            resolve: {
                alias: {   //@ 已经在 目录中被定义 ，定义为src
                    'assets': '@/assets',
                    'commonjs': '@/commonjs',
                    'components': '@/components',
                    'network': '@/network',
                    'views': '@/views'
                }
            },
        };
       
        return configuration;
    },
   
}
