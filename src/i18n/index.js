import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/i18n/en.json'
import ptBr from '@/i18n/pt-BR.json'

Vue.use(VueI18n)

export default new VueI18n({
  locale: navigator.language || navigator.userLanguage,
  messages: {
    en,
    'en-US': en,
    'pt-BR': ptBr
  }
})
