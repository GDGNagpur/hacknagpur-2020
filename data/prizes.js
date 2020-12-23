const prizePool = {
  googleHome:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2F346-3463339_google-home-mini-chalk%201.png?alt=media&token=7971acaa-68ce-4b21-88fb-ac92db494e77',
  hacknagpurHoodie:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FArtboard%202%201.png?alt=media&token=19be066b-2019-4b57-a401-198afacfdafe',
  certificate:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FCertificate%202.png?alt=media&token=f6b828a4-69b7-486f-83dd-6b2937f231b9',
  codingBlocks:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FCoding%20Blocks%203.png?alt=media&token=9d3f90ff-765c-4891-9b03-002579b23b38',
  githubBag:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FGitHub%20Bag%201.png?alt=media&token=abd55e2c-8865-4f7f-ab54-a0635fcb2e2d',
  hacknagpurTshirt:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FHN%20T-Shirt%40288x%201.png?alt=media&token=38542c5e-1817-486c-9fea-adee26abbab9',
  hacknagpurMug:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FHN-Mug%40288x%201.png?alt=media&token=f9c9b11c-d0c1-40c3-9915-d5a7fb1a1818',
  hacknagpurPenAndDiary:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FHN-Pen%26Diary%40288x%201.png?alt=media&token=cebfe4ea-561c-40c9-b730-60098800562b',
  hacknagpur:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FHackNagpur1a1%20%E2%80%93%207%201.png?alt=media&token=67251526-1e30-43e7-a473-9a28d9673b71',
  jetBrainsTshirt:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FJetbrains%202.png?alt=media&token=9eb139ce-05a0-4fdc-9855-565d16d0fc32',
  hacknagpurSticker:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FSTICKER%40288x%201.png?alt=media&token=41adb956-3518-4f64-877e-6a361a364b33',
  echoAR:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FechoAR_brand_logo_4%201.png?alt=media&token=592038ae-281c-47b5-bc55-d0bbc5554be5',
  jetBrains:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2Fjetbrains-variant-4%201.png?alt=media&token=f345bf77-09bd-42b5-965d-7178106d875c',
  linode:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2Flinode%201.png?alt=media&token=b3801079-129c-491e-aa7b-ee1b0e0ccb2a',
  elastic:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2Flogo%20elastic%20horizontal%20color.png?alt=media&token=ab6dabcc-cd61-4e07-b1c2-72b1988ea026',
  devfolioTshirt:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2Fugqwidu%201.png?alt=media&token=48eab122-3044-4d13-abd7-75a582ee8b4b',
  internship:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FInternship%201.png?alt=media&token=6e774414-0c95-492d-a223-2a7793665e4b',
  community:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FCommunity%201.png?alt=media&token=88677bf2-e327-4aab-962b-0ec9e0dbbb81',
  featured:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FFeatured%201.png?alt=media&token=25693ea6-4674-45eb-abe8-8ba33aaa010b',
  amazon:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FGiftCard%201.png?alt=media&token=36b57ff8-4331-417b-85b1-c7098c3657ea',
  onemonth:
    'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FGroup%20215.png?alt=media&token=fa9431d0-04a7-4fcd-a366-fc2270754827',
  5000: 'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FGroup%20212.png?alt=media&token=67024a6a-e0ab-4bbc-ac9d-e42d85944fad',
  10000: 'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FGroup%20211.png?alt=media&token=8244add6-06d9-45aa-88a2-80c76d68f4b6',
  15000: 'https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/prizes%2FGroup%20213.png?alt=media&token=20950ba4-4e05-47c6-afc9-4af83d1c5855',
};

export const prizes = {
  first: [
    {
      name: 'Google Home',
      image: prizePool['googleHome'],
    },
    {
      name: 'T-Shirt',
      image: prizePool['hacknagpurTshirt'],
    },
    {
      name: 'Devfolio T-shirt',
      image: prizePool['devfolioTshirt'],
    },
    {
      name: 'Jetbrains T-Shirt',
      image: prizePool['jetBrainsTshirt'],
    },
    {
      name: 'Coffee Mug',
      image: prizePool['hacknagpurMug'],
    },
    {
      name: 'Pen & Diary',
      image: prizePool['hacknagpurPenAndDiary'],
    },
    {
      name: 'Stickers',
      image: prizePool['hacknagpurSticker'],
    },
    {
      name: '90% Discount on all Coding blocks LITE & Premium Courses',
      image: prizePool['codingBlocks'],
    },
    {
      name: 'Free Business Access for one month on echoAR',
      image: prizePool['echoAR'],
    },
    {
      name: '20 $ Credit for Linode Cloud Hosting',
      image: prizePool['linode'],
    },
    {
      name: '100% off on JetBrains IDEs for 1 year',
      image: prizePool['jetBrains'],
    },
    {
      name: 'Exclusive Cloud Credits for Elastic Products',
      image: prizePool['elastic'],
    },
    {
      name: 'Get Featued in HN Social Media, News Publications and Blogs',
      image: prizePool['hacknagpur'],
    },
    {
      name: 'Certificate of Appreciation',
      image: prizePool['certificate'],
    },
  ],
  second: [
    {
      name: 'Hoodie',
      image: prizePool['hacknagpurHoodie'],
    },
    {
      name: 'T-Shirt',
      image: prizePool['hacknagpurTshirt'],
    },
    {
      name: 'Devfolio T-shirt',
      image: prizePool['devfolioTshirt'],
    },
    {
      name: 'Jetbrains T-Shirt',
      image: prizePool['jetBrainsTshirt'],
    },
    {
      name: 'Coffee Mug',
      image: prizePool['hacknagpurMug'],
    },
    {
      name: 'Pen & Diary',
      image: prizePool['hacknagpurPenAndDiary'],
    },
    {
      name: 'Stickers',
      image: prizePool['hacknagpurSticker'],
    },
    {
      name: '80% Discount on all Coding blocks LITE & Premium Courses',
      image: prizePool['codingBlocks'],
    },
    {
      name: 'Free Business Access for one month on echoAR',
      image: prizePool['echoAR'],
    },
    {
      name: '20 $ Credit for Linode Cloud Hosting',
      image: prizePool['linode'],
    },
    {
      name: '100% off on JetBrains IDEs for 1 year',
      image: prizePool['jetBrains'],
    },
    {
      name: 'Exclusive Cloud Credits for Elastic Products',
      image: prizePool['elastic'],
    },
    {
      name: 'Get Featued in HN Social Media, News Publications and Blogs',
      image: prizePool['hacknagpur'],
    },
    {
      name: 'Certificate of Appreciation',
      image: prizePool['certificate'],
    },
  ],
  third: [
    {
      name: 'T-Shirt',
      image: prizePool['hacknagpurTshirt'],
    },
    {
      name: 'Devfolio T-shirt',
      image: prizePool['devfolioTshirt'],
    },
    {
      name: 'Jetbrains T-Shirt',
      image: prizePool['jetBrainsTshirt'],
    },
    {
      name: 'Coffee Mug',
      image: prizePool['hacknagpurMug'],
    },
    {
      name: 'Pen & Diary',
      image: prizePool['hacknagpurPenAndDiary'],
    },
    {
      name: 'Stickers',
      image: prizePool['hacknagpurSticker'],
    },
    {
      name: '70% Discount on all Coding blocks LITE & Premium Courses',
      image: prizePool['codingBlocks'],
    },
    {
      name: 'Free Business Access for one month on echoAR',
      image: prizePool['echoAR'],
    },
    {
      name: '20 $ Credit for Linode Cloud Hosting',
      image: prizePool['linode'],
    },
    {
      name: '100% off on JetBrains IDEs for 1 year',
      image: prizePool['jetBrains'],
    },
    {
      name: 'Exclusive Cloud Credits for Elastic Products',
      image: prizePool['elastic'],
    },
    {
      name: 'Get Featued in HN Social Media, News Publications and Blogs',
      image: prizePool['hacknagpur'],
    },
    {
      name: 'Certificate of Appreciation',
      image: prizePool['certificate'],
    },
  ],
  women: [
    {
      name: 'GitHub bag',
      image: prizePool['githubBag'],
    },
    {
      name: 'T-Shirt',
      image: prizePool['hacknagpurTshirt'],
    },
    {
      name: 'Devfolio T-shirt',
      image: prizePool['devfolioTshirt'],
    },
    {
      name: 'Jetbrains T-Shirt',
      image: prizePool['jetBrainsTshirt'],
    },
    {
      name: 'Coffee Mug',
      image: prizePool['hacknagpurMug'],
    },
    {
      name: 'Pen & Diary',
      image: prizePool['hacknagpurPenAndDiary'],
    },
    {
      name: 'Stickers',
      image: prizePool['hacknagpurSticker'],
    },
    {
      name: '80% Discount on all Coding blocks LITE & Premium Courses',
      image: prizePool['codingBlocks'],
    },
    {
      name: 'Free Business Access for one month on echoAR',
      image: prizePool['echoAR'],
    },
    {
      name: '20 $ Credit for Linode Cloud Hosting',
      image: prizePool['linode'],
    },
    {
      name: '100% off on JetBrains IDEs for 1 year',
      image: prizePool['jetBrains'],
    },
    {
      name: 'Exclusive Cloud Credits for Elastic Products',
      image: prizePool['elastic'],
    },
    {
      name: 'Get Featued in HN Social Media, News Publications and Blogs',
      image: prizePool['hacknagpur'],
    },
    {
      name: 'Certificate of Appreciation',
      image: prizePool['certificate'],
    },
  ],
  matic: [
    {
      name: 'for the best hack built on Ethereum',
      image: prizePool[10000],
    },
    {
      name: 'for the best hack built on Ethereum + Matic',
      image: prizePool[15000],
    },
    {
      name: 'Eligibility to apply for internship/full-time roles',
      image: prizePool['internship'],
    },
  ],
  portis: [
    {
      name: '(in crypto) for best Dapp built on Portis',
      image: prizePool[15000],
    },
  ],
  tezos: [
    {
      name: 'for the best hack built on Tezos',
      image: prizePool[10000],
    },
    {
      name: 'for Runner-up Dapp Built on Tezos',
      image: prizePool[5000],
    },
    {
      name: 'Continuity Grant opportunity for exceptional builders',
      image: prizePool['community'],
    },
  ],
  echoar: [
    {
      name: '50$ Amazon gift card (per team)',
      image: prizePool['amazon'],
    },
    {
      name: 'Business Tier access (per team member)',
      image: prizePool['onemonth'],
    },
    {
      name: 'Selected projects will be featured on echoAR “Inspiration” Page',
      image: prizePool['featured'],
    },
  ],
};
