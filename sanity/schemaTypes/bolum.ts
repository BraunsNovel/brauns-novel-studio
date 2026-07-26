import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'bolum',
  title: 'Bölüm',
  type: 'document',
  fields: [
    defineField({
      name: 'baslik',
      title: 'Bölüm Başlığı',
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
      name: 'seri',
      title: 'Seri',
      type: 'reference',
      to: [{ type: 'seri' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'numara',
      title: 'Bölüm Numarası',
      type: 'number',
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: 'icerik',
      title: 'Bölüm İçeriği',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'yayinTarihi',
      title: 'Yayın Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
