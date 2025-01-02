

export default {
  title: "Hero section",
  name: "herosection",
  type: "document",
  fields: [
    {
      title: "Blog image",
      name: "blogimage",
      type: "image",

    },
    {
      title: "Heading",
      name: "heading",
      type: "string",

    },
    {
      title: "Content",
      name: "content",
      type: "text",
      
      

    },
    

    {
      title: "Paragraph",
      name: "paragraph",
      type: "array",
      of:[{type:"block"}],


    },
    {
      name:'slug',
      title:'Slug',
      type:'slug',
      options:{
        source:'heading',
        maxLength:96,
      }
    },

  ]


}