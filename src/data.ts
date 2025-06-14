export const chatsList: {
  name: string
  preview: { text: string; outgoing?: boolean }
  counter?: number | string
  time: string
}[] = [
  {
    name: 'Бильбо',
    preview: { text: 'Изображение' },
    counter: 2,
    time: '10:49',
  },
  {
    name: 'Братство Кольца',
    preview: { text: 'стикер', outgoing: true },
    time: '12:01',
  },
  {
    name: 'Боромир',
    preview: { text: 'В Мордор нельзя просто войти. Его чёрные врата...' },
    counter: '1',
    time: '11:30',
  },
  {
    name: 'Арагорн',
    preview: {
      text: 'Ждите меня с первым лучом солнца, я приду...',
      outgoing: true,
    },
    time: 'Пт',
  },
  {
    name: 'Элеронд',
    preview: { text: 'Я был там, Гендальф. Я был там 3000 лет назад…' },
    time: 'Cр',
  },
  {
    name: 'Фродо',
    preview: {
      text: 'Жаль? Жалость остановила руку Бильбо. Многие...',
      outgoing: true,
    },
    time: 'Вт',
  },
  {
    name: 'Торин',
    preview: { text: 'Посмотреть, что сзади', outgoing: true },
    time: '23 декабря 2015',
  },
  {
    name: 'Саруман',
    preview: {
      text: 'Скажи мне, друг: когда Саруман Мудрый променял...',
      outgoing: true,
    },
    time: '2 мая 2005',
  },
  {
    name: 'Галадриэль',
    preview: { text: 'Митрандир, почему полурослик?' },
    time: '12 июня 2002',
  },
  {
    name: 'Балрог',
    preview: { text: 'Ты не пройдёшь!!!', outgoing: true },
    time: '17 сентября 2001',
  },
  {
    name: 'Пиппин',
    preview: { text: 'Тук, болван! В следующий...', outgoing: true },
    time: '1 декабря 2000',
  },
]
