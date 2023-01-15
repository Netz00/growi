# Scheme for generating creator profiles

Open [json-generator](https://json-generator.com/) to generate JSON.

```js
[
    '{{repeat(70)}}',
    {
      index: '{{index()}}',
      firstName: '{{firstName()}}',
      lastName: '{{surname()}}',
      username: function (tags) {
        return (this.firstName.substring(0,3)  + this.lastName.substring(0,3)).toLowerCase()+tags.integer(0, 9);
      }, 
      profileImage: '/assets/images/profile1ProfileImage.png',
      profileImageAlt: 'knolltroll profile image',
      tags: [
        '{{repeat(4, 7)}}',
        '{{lorem(1, "words")}}'
      ],
      startingPrice: '{{integer(100, 3000)}}',
      reviewsNumber: '{{integer(1, 80)}}',
      followersNumber: '{{integer(5000, 80000)}}',
      rating: '{{floating(0.0, 5, 1)}}',
      engagmentRatioPercentage: '{{floating(0.50, 10, 2)}}',
      location:{ country: '{{country()}}', city: '{{city()}}' },
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
      ]
  
    }
  ]
```
