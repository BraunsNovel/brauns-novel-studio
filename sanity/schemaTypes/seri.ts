import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'seri',
  title: 'Seri',
  type: 'document',
  fields: [
    defineField({
      name: 'baslik',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL (Otomatik)',
      type: 'slug',
      options: { source: 'baslik' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alternatif',
      title: 'Alternatif Başlık',
      type: 'string',
    }),
    defineField({
      name: 'yazar',
      title: 'Yazar',
      type: 'string',
    }),
    defineField({
      name: 'artist',
      title: 'Artist/Çizer',
      type: 'string',
    }),
    defineField({
      name: 'durum',
      title: 'Durum',
      type: 'string',
      options: {
        list: [
          { title: 'Devam Ediyor', value: 'devam' },
          { title: 'Tamamlandı', value: 'tamamlandi' },
          { title: 'Hiatus', value: 'hiatus' },
        ],
      },
    }),
    defineField({
      name: 'guncelleme',
      title: 'Güncelleme Sıklığı',
      type: 'string',
    }),
    defineField({
      name: 'turler',
      title: 'Türler',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy',
          'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller',
          'Slice of Life', 'Supernatural', 'Psychological',
          'Historical', 'Martial Arts', 'Isekai', 'System',
          'Regression', 'Reincarnation', 'School Life',
        ],
      },
    }),
    defineField({
      name: 'kapak',
      title: 'Kapak Görseli',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'ozet',
      title: 'Özet',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'oneCikan',
      title: 'Ana Sayfada Öne Çıkar',
      type: 'boolean',
    }),
  ],
})
