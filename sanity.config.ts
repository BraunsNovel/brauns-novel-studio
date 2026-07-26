import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'brauns-novel',
  title: 'Braun\'s Novel',
  projectId: '98fsjxxl',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [
      {
        name: 'seri',
        title: 'Seri',
        type: 'document',
        fields: [
          {
            name: 'baslik',
            title: 'Başlık',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            name: 'alternatif',
            title: 'Alternatif Başlık',
            type: 'string'
          },
          {
            name: 'yazar',
            title: 'Yazar',
            type: 'string'
          },
          {
            name: 'artist',
            title: 'Artist/Çizer',
            type: 'string'
          },
          {
            name: 'durum',
            title: 'Durum',
            type: 'string',
            options: {
              list: [
                { title: 'Devam Ediyor', value: 'devam' },
                { title: 'Tamamlandı', value: 'tamamlandi' },
                { title: 'Hiatus', value: 'hiatus' }
              ]
            }
          },
          {
            name: 'guncelleme',
            title: 'Güncelleme Sıklığı',
            type: 'string'
          },
          {
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
                'Regression', 'Reincarnation', 'School Life'
              ]
            }
          },
          {
            name: 'kapak',
            title: 'Kapak Görseli',
            type: 'image',
            options: { hotspot: true }
          },
          {
            name: 'ozet',
            title: 'Özet',
            type: 'text',
            rows: 5
          },
          {
            name: 'oneCikan',
            title: 'Ana Sayfada Öne Çıkar',
            type: 'boolean'
          }
        ]
      },
      {
        name: 'bolum',
        title: 'Bölüm',
        type: 'document',
        fields: [
          {
            name: 'baslik',
            title: 'Bölüm Başlığı',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            name: 'seri',
            title: 'Seri',
            type: 'reference',
            to: [{ type: 'seri' }],
            validation: Rule => Rule.required()
          },
          {
            name: 'numara',
            title: 'Bölüm Numarası',
            type: 'number',
            validation: Rule => Rule.required().positive().integer()
          },
          {
            name: 'icerik',
            title: 'Bölüm İçeriği',
            type: 'array',
            of: [
              { type: 'block' },
              {
                type: 'image',
                options: { hotspot: true }
              }
            ]
          },
          {
            name: 'yayinTarihi',
            title: 'Yayın Tarihi',
            type: 'datetime',
            initialValue: () => new Date().toISOString()
          }
        ],
        orderings: [
          {
            title: 'Bölüm Numarası (Artan)',
            name: 'numaraAsc',
            by: [{ field: 'numara', direction: 'asc' }]
          }
        ]
      }
    ]
  }
})
