const products = [
    {
      id: 1,
      productName: "T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 100,
      imageLink: ["https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921749/Online_Store/1/Mens_NASA_Space_Bear_Print_O-Neck_Casual_Loose_Short_Sleeve_T-Shirt_rxmpdq.png",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921745/Online_Store/1/NASA_Space_Bear_Print_T-Shirt_mcfz8h.jpg",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921745/Online_Store/1/Mens_NASA_Space_Bear_Print_O-Neck_Casual_Loose_Short_Sleeve_T-Shirt_twd7hb.jpg",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921745/Online_Store/1/Mens_NASA_Space_Bear_Print_O-Neck_Casual_Loose_Short_Sleeve_T-Shirt_1_m3ypz3.jpg"],
    },
    {
      id: 2,
      productName: "T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 200,
      imageLink: ["https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921751/Online_Store/2/1658329192737168ff6ad063452563108e1de4d132_thumbnail_900x_l6homy.webp",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921748/Online_Store/2/164802324294a9e00cd18e3bdacdb07faadc6ea08e_thumbnail_900x_gxucpx.webp",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921747/Online_Store/2/16480232420809ac54cac58a758d88fbee070f7f7a_thumbnail_900x_q83jt1.webp",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921747/Online_Store/2/1648023235ba32327d7aecda5b9de9913efa316d9e_thumbnail_900x_oxiajy.webp"],
    },
    {
      id: 3,
      productName: "T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 300,
      imageLink: ["https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921745/Online_Store/3/Paper_Plane_of_Liberty_Print_Crew_Neck_Short_Sleeve_T-Shirts_-_Grey___XL_zedv4p.png",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921744/Online_Store/3/Paper_Plane_of_Liberty_Print_Crew_Neck_Short_Sleeve_T-Shirts_-_Khaki___XL_wtas2i.png",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921743/Online_Store/3/Paper_Plane_of_Liberty_Print_Crew_Neck_Short_Sleeve_T-Shirts_-_White___XL_ts3anc.png",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921743/Online_Store/3/Paper_Plane_of_Liberty_Print_Crew_Neck_Short_Sleeve_T-Shirts_-_Black___XL_k3yxsz.png"],
    },
    {
      id: 4,
      productName: "T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 400,
      imageLink: ["https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921745/Online_Store/4/1646880634f3ecf23038717f7adbcf3658effab2e7_thumbnail_900x_egyn95.webp",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921745/Online_Store/4/164430580182db3b5a5192e660a87c832a397044b6_thumbnail_900x_jnrcrb.webp",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921744/Online_Store/4/1646822799c97e5f9754d3b3314b4e6ffd848ad22d_thumbnail_900x_sgugao.webp",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921744/Online_Store/4/163826656927114e9da27ea115f55404141ba11264_thumbnail_900x_vrikpo.webp"],
    },
    {
      id: 5,
      productName: "NEW-T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 600,
      imageLink: ["https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921745/Online_Store/4/1646880634f3ecf23038717f7adbcf3658effab2e7_thumbnail_900x_egyn95.webp",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921745/Online_Store/4/164430580182db3b5a5192e660a87c832a397044b6_thumbnail_900x_jnrcrb.webp",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921744/Online_Store/4/1646822799c97e5f9754d3b3314b4e6ffd848ad22d_thumbnail_900x_sgugao.webp",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921744/Online_Store/4/163826656927114e9da27ea115f55404141ba11264_thumbnail_900x_vrikpo.webp"],
    },
    {
      id: 6,
      productName: "NEW-T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 350,
      imageLink: ["https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921749/Online_Store/1/Mens_NASA_Space_Bear_Print_O-Neck_Casual_Loose_Short_Sleeve_T-Shirt_rxmpdq.png",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921745/Online_Store/1/NASA_Space_Bear_Print_T-Shirt_mcfz8h.jpg",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921745/Online_Store/1/Mens_NASA_Space_Bear_Print_O-Neck_Casual_Loose_Short_Sleeve_T-Shirt_twd7hb.jpg",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921745/Online_Store/1/Mens_NASA_Space_Bear_Print_O-Neck_Casual_Loose_Short_Sleeve_T-Shirt_1_m3ypz3.jpg"],
    },

    {
      id: 7,
      productName: "T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 150,
      imageLink: ["https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921751/Online_Store/2/1658329192737168ff6ad063452563108e1de4d132_thumbnail_900x_l6homy.webp",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921748/Online_Store/2/164802324294a9e00cd18e3bdacdb07faadc6ea08e_thumbnail_900x_gxucpx.webp",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921747/Online_Store/2/16480232420809ac54cac58a758d88fbee070f7f7a_thumbnail_900x_q83jt1.webp",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921747/Online_Store/2/1648023235ba32327d7aecda5b9de9913efa316d9e_thumbnail_900x_oxiajy.webp"],
    },


    {
      id: 8,
      productName: "T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 450,
      imageLink: ["https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921745/Online_Store/3/Paper_Plane_of_Liberty_Print_Crew_Neck_Short_Sleeve_T-Shirts_-_Grey___XL_zedv4p.png",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921744/Online_Store/3/Paper_Plane_of_Liberty_Print_Crew_Neck_Short_Sleeve_T-Shirts_-_Khaki___XL_wtas2i.png",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921743/Online_Store/3/Paper_Plane_of_Liberty_Print_Crew_Neck_Short_Sleeve_T-Shirts_-_White___XL_ts3anc.png",
      "https://res.cloudinary.com/dyl97ofpv/image/upload/v1686921743/Online_Store/3/Paper_Plane_of_Liberty_Print_Crew_Neck_Short_Sleeve_T-Shirts_-_Black___XL_k3yxsz.png"],
    },

   ];
   module.exports = products;