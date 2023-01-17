# Scheme for generating creator profiles

Open [json-generator](https://json-generator.com/) to generate JSON.

```js
[
  '{{repeat(70)}}',
  {
    id: '{{index()}}',
    firstName: '{{firstName()}}',
    lastName: '{{surname()}}',
    username: function (tags) {
      return (
        (
          this.firstName.substring(0, 3) + this.lastName.substring(0, 3)
        ).toLowerCase() + tags.integer(0, 9)
      );
    },
    profileImage: '{{random("/assets/images/profile1ProfileImage.png", "/assets/images/profile2ProfileImage.png","/assets/images/profile3ProfileImage.png","/assets/images/profile4ProfileImage.png","/assets/images/profile5ProfileImage.png","/assets/images/profile6ProfileImage.png","/assets/images/profile7ProfileImage.png","/assets/images/profile8ProfileImage.png","/assets/images/profile9ProfileImage.png",)}}',
    tags: ['{{repeat(4, 7)}}', '{{lorem(1, "words")}}'],
    startingPrice: '{{integer(100, 3000)}}',
    reviewsNumber: '{{integer(1, 80)}}',

    rating: '{{floating(0.0, 5, 1)}}',
    location: { country: '{{country()}}', city: '{{city()}}' },
    media: [
      {
        key: 0,
        url: "/assets/images/profile1Media1.png",
        alt: "Influencer",
        type: "image/png"
      },
      {
        key: 1,
        url: "/assets/images/profile1Media2.png",
        alt: "Influencer",
        type: "image/png"
      },
      {
        key: 2,
        url: "/assets/videous/profile1Media3.mp4",
        alt: "Influencer",
        type: "video/mp4"
      }
    ],

    postNumber: '{{integer(50, 800)}}',
    postLast: [
      '{{repeat(3)}}',
      '{{random("https://www.instagram.com/p/CTW5jD2sBIp/", "https://www.instagram.com/p/CkgZSL5MRtm/", "https://www.instagram.com/p/Ci-oxHDMztO/", "https://www.instagram.com/p/Cjs313Nsdhn/", "https://www.instagram.com/p/CmelcDToY2t/", "https://www.instagram.com/p/CcqDiius92Q/", "https://www.instagram.com/p/Cih1JLOtbxf/", "https://www.instagram.com/p/CmYZdsyDtqz/", "https://www.instagram.com/p/CCrrMwNnwXT/", "https://www.instagram.com/p/B4FHxMDHFnX/", "https://www.instagram.com/p/BWAiHDRgDMH/", "https://www.instagram.com/p/CnCEB_wI4t3/", "https://www.instagram.com/p/CnDFXH3oyRA/", "https://www.instagram.com/p/CgmVEFWMHao/", "https://www.instagram.com/p/CgHXsniMwsA/", "https://www.instagram.com/p/CnFAWKVMCDa", "https://www.instagram.com/p/Cl0YF9sMmUn/", "https://www.instagram.com/p/ClBQEP7MCDm/", "https://www.instagram.com/p/CaSFYg7M7qG/", "https://www.instagram.com/p/CSSCkcnsp86/", "https://www.instagram.com/p/COHw3ufr50l/")}}'
    ],

    follower:'{{integer(5000, 80000)}}',

    followerRealSplit: function (tags) {
      const fake = tags.integer(10, this.follower/10);
      return {
        real: this.follower-fake,
        fake: fake
      };
    },

    followerGenderSplit: function (tags) {
      const male = tags.floating(0.5, 60, 2);
      const unknown = tags.floating(0.5, 15, 2);

      return {
        male: male,
        unknown: unknown,
        female: Math.round((100 - male - unknown) * 100) / 100
      };
    },

    followerLocationSplit: function (tags) {
      const city = [tags.city(),tags.city(),tags.city(),tags.city(),tags.city()];
      const unknown = tags.floating(0.5, 15, 2);


      return {
        city:city,
        year:[{
                year:2021,
                distribution:city.map(city=>tags.integer(0, 100))
            },
            {
                year:2022,
                distribution:city.map(city=>tags.integer(0, 100))
            }
      ]};
    },

    description: '{{lorem([1], "paragraphs")}}',

    engagmentRatioRatePercentage: '{{floating(0.50, 10, 2)}}',
    likeRatePercentage: '{{floating(0.50, 10, 2)}}',
    commentRatePercentage: '{{floating(0.50, 10, 2)}}',

    avgLikeNumber: '{{integer(400, 5000)}}',
    avgCommentNumber: '{{integer(200, 2000)}}',
    monthlyStats:[{month: "August", engagment:'{{floating(0.50, 10, 2)}}', followerNumber:'{{integer(5000, 80000)}}' }, {month: "September", engagment:'{{floating(0.50, 10, 2)}}', followerNumber:'{{integer(5000, 80000)}}' }, {month: "October", engagment:'{{floating(0.50, 10, 2)}}', followerNumber:'{{integer(5000, 80000)}}' }, {month: "November", engagment:'{{floating(0.50, 10, 2)}}', followerNumber:'{{integer(5000, 80000)}}' }, {month: "December", engagment:'{{floating(0.50, 10, 2)}}', followerNumber:'{{integer(5000, 80000)}}' }]
  }
]
```
