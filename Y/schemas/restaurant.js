import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the restaurant",
    },
    {
      name: "lon",
      type: "number",
      title: "Longitude of the restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Address of the restaurant",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Rating of the restaurant",
      validation: (Rule) => Rule.required()
      .min(1)
      .max(5)
      .error("Please enter a value between 1 to 5"),
    },
    {
      name: "type",
      title: "Category",
      type: "reference",
      to: [{type : "category"}],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{type : "reference", to: [{type : "dish"}]}],
    }
  ],
})
