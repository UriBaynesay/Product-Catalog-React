const STORAGE_KEY = "stores"

_setupLocalData()

export const productsCatalogService = {
  query,
  getFilters,
}

function query(filterBy = null) {
  const stores = JSON.parse(localStorage.getItem(STORAGE_KEY))
  return stores
}

function getFilters() {
  return {
    priceFilter: [
      {
        TagId: 20,
        Type: "Budget",
        Value: 5,
        Values: null,
        DisplayText: "$5",
        Order: null,
      },
      {
        TagId: 21,
        Type: "Budget",
        Value: 10,
        Values: null,
        DisplayText: "$10",
        Order: null,
      },
      {
        TagId: 22,
        Type: "Budget",
        Value: 20,
        Values: null,
        DisplayText: "$20",
        Order: null,
      },
      {
        TagId: 23,
        Type: "Budget",
        Value: 30,
        Values: null,
        DisplayText: "$30",
        Order: null,
      },
      {
        TagId: 24,
        Type: "Budget",
        Value: 40,
        Values: null,
        DisplayText: "$40",
        Order: null,
      },
      {
        TagId: 25,
        Type: "Budget",
        Value: 50,
        Values: null,
        DisplayText: "$50",
        Order: null,
      },
      {
        TagId: 26,
        Type: "Budget",
        Value: 75,
        Values: null,
        DisplayText: "$75",
        Order: null,
      },
      {
        TagId: 27,
        Type: "Budget",
        Value: 100,
        Values: null,
        DisplayText: "$100",
        Order: null,
      },
      {
        TagId: 32,
        Type: "Budget",
        Value: 9999,
        Values: null,
        DisplayText: "$100+",
        Order: null,
      },
    ],
    genderFilter: [
      {
        TagId: 3,
        Type: "Gender",
        Value: 3,
        Values: null,
        DisplayText: "Boy",
        Order: 1,
      },
      {
        TagId: 4,
        Type: "Gender",
        Value: 4,
        Values: null,
        DisplayText: "Girl",
        Order: 2,
      },
    ],
  }
}

function _setupLocalData() {
  if (JSON.parse(localStorage.getItem(STORAGE_KEY))) return
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([
      {
        Products: [
          {
            ProductId: 206419,
            ProductTitle: "Mom is Fabulous Fruit Box - Good",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at FTD\r\n\r\nProduct Description:\r\n\r\nMom is fabulous, so show her how much you care by sending this festive and fun gourmet fruit gift. Sure to please Mom on her special day!\nGOOD gift box holds fresh and juicy seasonal fruit, crackers, cheese, and almond tea cookies in a festive gift box.",
            ProductImage:
              "http://www.ftdimg.com/pics/products/zoom/G144_600x600.jpg",
            ThumbnailProductImage: null,
            Price: 39.99,
            PriceLabel: "$39.99",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
              61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
              77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 90, 91, 92, 93, 96, 97,
              98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.ftd.com/all-mothers-day-pcg/mom-is-fabulous-fruit-box/occasion-mothersday-all/1g44/?sid=1",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: null,
          },
          {
            ProductId: 205709,
            ProductTitle:
              "Spring Sensation Fruit & Sweets Gourmet Gift Basket - GOOD",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at FTD\r\n\r\nProduct Description:\r\n\r\nThe Spring Sensation Fruit & Sweets Gourmet Gift Basket is an incredible array of gourmet goodies ready to make your special recipient's day one they won't soon forget! A beautiful natural woven basket with pink and green accents is tied with a pink ribbon.\nGOOD Basket includes 2 D'Anjou Pears, 1 Red Pear, 2 Braeburn Apples, 2 Navel Oranges, 3-oz. Milk Chocolate Covered Dried Strawberries, a large flower decorated sugar cookie, 3-oz. white chocolate pastel flowers, and 3-oz. Chocolate Sea Salt Caramelized Cashews.",
            ProductImage:
              "http://www.ftdimg.com/pics/products/zoom/G428_600x600.jpg",
            ThumbnailProductImage: null,
            Price: 49.99,
            PriceLabel: "$49.99",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 28, 33, 42, 44, 50, 51, 52, 66, 72, 85,
              90, 91, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.ftd.com/easter-4-20-pcg/spring-sensation-fruit-sweets-gourmet-gift-basket/occasion-easter/4g28/?sid=1",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: null,
          },
          {
            ProductId: 206426,
            ProductTitle: "Godiva� Supreme",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at FTD\r\n\r\nProduct Description:\r\n\r\nSend your loving wishes in a grand way with a romantic basket filled with Godiva� chocolate! Indulge their sweet tooth with Godiva� milk chocolate and a salted caramel bar, dark chocolate covered almonds, a Godiva� solid milk chocolate and dark chocolate bar, chocolate-covered pretzels, Godiva� signature biscuits, milk chocolate-covered cashews, milk chocolate truffles, a milk chocolate and strawberry bar, a bag of dark French vanilla truffles, a bag of dark chocolate caramels and a bag of white chocolate truffles. All Godiva� and all exquisite!",
            ProductImage:
              "http://www.ftdimg.com/pics/products/zoom/G884_600x600.jpg",
            ThumbnailProductImage: null,
            Price: 99.99,
            PriceLabel: "$99.99",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
              61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
              77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 90, 91, 92, 93, 96, 97,
              98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.ftd.com/all-gifts-pcg/godiva-supreme/product-gift-all-bestsellers/g884/?sid=1",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: null,
          },
          {
            ProductId: 206418,
            ProductTitle:
              "Happy Birthday Party Starter Ultimate Gift - VASE INCLUDED",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at FTD\r\n\r\nProduct Description:\r\n\r\nThe Happy Birthday Party Starter Ultimate Gift is a bright and beautiful way to get your special recipient set to celebrate! Bringing together an array of eye-catching gifts, this package includes an 18 stem bouquet of assorted roses in a clear glass vase, an adorable plush seated bear holiding a present that declares, "Happy Birthday", 15 Chocolate Dip Delights� Birthday Belgian Chocolate-Dipped Oreo� Cookies, a mylar Happy Birthday balloon, and a birthday pop-up card. Arriving in one large gift box, this ultimate gift will make their special birthday celebration one to remember.\n',
            ProductImage:
              "http://www.ftdimg.com/pics/products/FW89BDAY_330x370.jpg",
            ThumbnailProductImage: null,
            Price: 119.99,
            PriceLabel: "$119.99",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
              61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
              77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 88, 90, 91, 92, 93, 96,
              97, 98, 99, 100,
            ],
            IsTopGift: true,
            IsPopularGift: false,
            ProductLink:
              "http://www.ftd.com/for-him-pcg/happy-birthday-party-starter-ultimate-gift-vase-included/product-forhim/fw89bday/?sid=1",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: null,
          },
          {
            ProductId: 206555,
            ProductTitle: "Tour the Wine Country Basket - Better",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at FTD\r\n\r\nProduct Description:\r\n\r\nTour the Wine Country with three delicious wines and gourmet foods. Each gift arrives with Lemon Almond Biscotti, Garlic & Herb Cheese, Spanish Olives, Beef Summer Sausage, Sweet & Hot Mustard, Nunes Farms Pistachios, Toasted Sesame Crackers and Ghirardelli Masterpiece Truffles.\nBETTER version includes Kunde Estate Zinfandel that is bold and ripe; Firestone Santa Ynez Valley Chardonnay with Fuji apple and citrus zest; Buena Vista Sonoma Cabernet Sauvignon exhibits black cherry and blueberry pie.",
            ProductImage:
              "http://www.ftdimg.com/pics/products/W279_330x370.jpg",
            ThumbnailProductImage: null,
            Price: 149.99,
            PriceLabel: "$149.99",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
              61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
              77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 90, 91, 92, 93, 96, 97,
              98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.ftd.com/all-gifts-pcg/tour-the-wine-country/product-gift-all-bestsellers/2w02/?sid=1",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: null,
          },
        ],
        StoreName: "FTD",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/ftd_logo.png",
        StoreOrder: 1,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/ftd_logo.png",
        IsAffiliate: null,
        StoreText: "Put a smile on their face!",
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: true,
        PersonalMessageMaxLength: null,
        StoreId: 1226,
        DeliveryType: 2,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 211491,
            ProductTitle: "GC",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Gap\r\n\r\nProduct Description:\r\n\r\nGC",
            ProductImage:
              "http://plazalasamericas.s3.amazonaws.com/wp-content/uploads/2011/01/GAP-KIDS.jpg",
            ThumbnailProductImage: null,
            Price: 50.0,
            PriceLabel: "$50.00",
            ProductTags: [
              1, 2, 3, 4, 9, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41,
              42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
              58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
              74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 90, 91, 92,
              104,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink: "",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
        ],
        StoreName: "Gap",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/gap.png",
        StoreOrder: 1,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/gap.png",
        IsAffiliate: null,
        StoreText:
          "Don't worry about size or color, the recipient makes the final choice",
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: null,
        StoreId: 104,
        DeliveryType: 1,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 205437,
            ProductTitle:
              "Memories for My Grandchild: A Keepsake to Remember (Grandparent's Memory Book) Spiral-bound",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nDon\'t you wish your grandmother had written dow...\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/71btfdMYxVL.jpg",
            ThumbnailProductImage: null,
            Price: 0.5,
            PriceLabel: "$0.50",
            ProductTags: [
              2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 28, 33, 42,
              44, 50, 51, 52, 66, 72, 85, 86, 90, 91, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/Memories-My-Grandchild-Keepsake-Grandparents/dp/144130262X/ref=sr_1_4?ie=UTF8&qid=1387805457&sr=8-4&keywords=best+gifts+for+grandma&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206312,
            ProductTitle:
              "Acer Aspire P3-171-6820 11.6-Inch Convertible 2-in-1 Touchscreen Ultrabook (Silver)",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nhere\'s more to life than work, and that\'s why we\'ve created the Acer Aspire P3. Not only is it a fully functioning 11.6" Ultrabook, but it also transforms into a sleek and stylish tablet for use on the go. So whether you�re composing an email, or your next musical masterpiece, the Acer Aspire P3 is the perfect piece of technology for it all.\n B00CRY012E_image_1\nKey Features\n11.6" HD 1366 x 768 resolution, Acer CineCrystal� LED-backlit TFT LCD with integrated 10-Point multi-touch screen, supporting finger touch and image auto rotation\nWindows 8\n3rd Generation Intel� Core� i5-3339Y Processor 1.5GHzwith Turbo Boost Technology up to 2.0GHz\n4GB of DDR3 On-Board System Memory\nIntel� HD Graphics 4000with 128MB of dedicated system memory\n120GB Solid State Drive\nOptimized Dolby� Home Theater� v4 audio enhancement\nTwo Built-in Stereo Speakers\nIntegrated Digital Microphone\nAcer Invilink� Nplify� 802.11a/b/g/n Wi-Fi Certified�\nBluetooth� 4.0 + HS\n1- USB 3.0 Port\n1 - Micro-HDMI� out with HDCP support\n5MP Rear-facing HD camera\nFront-Facing HD Camera\nSensors:Gyroscope, E-Compass, Accelerometer, Ambient light sensor\n4-Cell Li-Ion Battery\nINCLUDES Protective Case with Bluetooth Keyboard\n\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/81edO6PngRL._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 2.0,
            PriceLabel: "$2.00",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 88, 90,
              91, 92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: true,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/dp/B00CRY012E/?pf_rd_p=1670110122&pf_rd_s=merchandised-search-3&pf_rd_t=101&pf_rd_i=7258691011&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=15Y0VZM60YBVBC7NN86Z&ref_=acs_ux_sfg_1_lapsNtabs&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206258,
            ProductTitle: "Nuby Octopus Bath Time Toss",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nFloating bath toy teaches hand-eye coordination and enjoyment\nFun colors and shapes stimulate the senses\nIncludes 3 rings to toss\nBPA Free\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/81gfK6u0LWL._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 6.99,
            PriceLabel: "$6.99",
            ProductTags: [
              3, 4, 5, 6, 7, 8, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86,
              90, 91, 92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/Nuby-Octopus-Bath-Time-Toss/dp/B008CDR7LW/ref=zg_bs_196602011_6#productDetails?tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206371,
            ProductTitle: "Sassy Disney Wind-Up Toy, Finding Nemo, 2 Count",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\n2pk includes two favorite Disney finding Nemo characters: Nemo and squirt\nNemo and squirt wind up and swim around in the tub\nTeaches baby cause and effect\nEasy for baby to grasp and hold\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/81nlx4Eb28L._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 9.99,
            PriceLabel: "$9.99",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100, 104,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/Sassy-Disney-Wind-Up-Finding-Count/dp/B00GRS9YME/ref=zg_mg_tab_pd_bsnr_3?tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206143,
            ProductTitle: "Aveeno Gift Set Mommy and Me",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nFrom Aveeno, the leader in active naturals, comes this gift set for baby and mommy! Capture the unique and gentle cleansing, moisturizing, and protecting capabilities of Aveeno. From oatmeal for superior moisturizing, to lavender for well-known calming, comes the perfect gift set for baby and mommy\'s delicate skin. Included in a reusable cloth lined basket are: Aveeno Baby Wash & Shampoo 8 oz, Aveeno Baby Daily Moisture Lotion 8 oz, Aveeno Baby Calming Comfort Lotion 8 oz, Aveeno Baby Calming Comfort Bath 8 oz, Aveeno Baby Diaper Rash Ointment 1.8 oz, and for Mommy:Aveeno Stress Relief Body Lotion 12 oz. and Aveeno Stress Relief Body Wash 2oz.\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/51UuiP1Xf-L.jpg",
            ThumbnailProductImage: null,
            Price: 10.0,
            PriceLabel: "$10.00",
            ProductTags: [
              1, 2, 3, 4, 6, 17, 18, 19, 28, 29, 33, 42, 44, 50, 51, 52, 66, 72,
              85, 86, 90, 91, 96, 97, 98, 99, 100, 111, 112, 115, 168,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.amazon.com/Aveeno-Gift-Set-Mommy-Me/dp/B002I4MBRQ/ref=pd_sbs_hpc_4?tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206209,
            ProductTitle: "Bright Starts Pretty in Pink Put and Take Purse",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nLarge purse with accessories for put and take fun\n5 put and take accessories: cell phone featuring numbers and rattle beads, 2 pieces of crinkle money, teether key soothes baby\'s gums, heart shaped mirror for self discovery\nPress the bow to hear fun sounds\nCarry handle for on the go fun\nA portion of the proceeds from this item supports breast cancer charities\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/71M4he88BlL._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 10.39,
            PriceLabel: "$10.39",
            ProductTags: [
              4, 5, 28, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90, 91, 96, 97,
              98, 99, 100, 111, 168,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.amazon.com/Bright-Starts-Pretty-Pink-Purse/dp/B004X0WC54/ref=pd_sim_ba_9?ie=UTF8&refRID=02Q9D56RCFWMXWQC0X1F&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206219,
            ProductTitle:
              'Baby Aspen "Sweet Feet" Three Scoops of Socks Gift Set\t',
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nEach scoop of the triple-scoop "ice cream cone" is a pair of socks in strawberry, raspberry and lime\nWhite "sprinkles" on socks are actually rubber traction\nCylindrical, clear showcase gift presentation includes paper ice-cream "cone", pink scalloped cap at both ends, a white-satin bow at the top and a color-coordinated tag\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/81KwvnvV3uL._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 11.34,
            PriceLabel: "$11.34",
            ProductTags: [
              4, 5, 6, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90, 91,
              92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/gp/product/B00573LLPI/ref=s9_simh_se_p201_d0_i2?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=auto-no-results-center-1&pf_rd_r=1XEK39Q31Z9KQ8GFKJP0&pf_rd_t=301&pf_rd_p=1263465782&pf_rd_i=laocitan&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206220,
            ProductTitle:
              "Beaba Stackable Formula and Snack Containers in Sorbet",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nPouring spout makes dispensing formula into bottle easy\nDoubles as on-the-go container for snacks\nSoft handle to latch on any bag\nBPA-free and dishwasher safe\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/61c6ngtYYLL._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 11.95,
            PriceLabel: "$11.95",
            ProductTags: [
              4, 5, 6, 7, 8, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100, 104, 111, 114, 168, 169,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.amazon.com/Beaba-Stackable-Formula-Containers-Sorbet/dp/B005AUUTFQ/ref=sr_1_1?s=baby-products&ie=UTF8&qid=1395046957&sr=1-1&keywords=B%C3%A9aba+Stackable+Formula+%26+Snack+Containers&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206380,
            ProductTitle:
              "Vintage White Fabric Flower Lace Headband, Perfect for Christening, Newborn Baby Girls Photography, Easter, Everyday Use",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nThis beautiful Vintage flower lace is on a soft headband and embellished with Swarovski Crystals it\'s perfect for girls of all ages and all style hair. Use it everyday for a stylish look. Perfect for babies first photography or Christening. Gorgeous and stunning look, fabulous for photo prop, Christmas, birthdays, christening and all your special occasions.\n\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/41XKmh5CxsL._AA500_.jpg",
            ThumbnailProductImage: null,
            Price: 11.99,
            PriceLabel: "$11.99",
            ProductTags: [
              4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100, 104, 111, 114, 168, 169,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.amazon.com/Headband-Christening-Photography-Everyday-3-6months/dp/B00IIXOJI0/ref=sr_1_21?s=beauty&ie=UTF8&qid=1397763021&sr=1-21&keywords=easter&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206170,
            ProductTitle:
              "Contigo AUTOSEAL Kangaroo Water Bottle with Storage Compartment, 24-Ounce",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nThis water bottle delivers on essential needs while on the go. The AUTOSEAL Water Bottle with compartment delivers on a unique combination of style and function. Durable. Colorful. Functional. Holds your keys and credit cards. The AUTOSEAL Water Bottle is easy to drink from, easy to carry and has a protective cover at the spout . It\'s the ultimate in on-the-go hydration with a compartment that holds your essentials while on-the-go.\nMade from BPA-free material\nPatented autoseal lid is 100-percent leak-proof and 100-percent spill-proof\nDrinking made easy; press to sip; release to seal; autoseal automatically seals between sips to ensure no spills\nPatented carabineer clip on the handle allows you to take this mug wherever you go, attach it to a bag strap for hands-free portability\nPatented lid technology optimizes flow control to make the bottle easy to drink from\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/61RUdskSkaL._SL1418_.jpg",
            ThumbnailProductImage: null,
            Price: 13.54,
            PriceLabel: "$13.54",
            ProductTags: [
              1, 2, 3, 4, 5, 19, 28, 29, 30, 31, 33, 42, 44, 50, 51, 52, 66, 72,
              85, 86, 90, 91, 92, 96, 97, 98, 99, 100, 104, 111, 112, 113, 114,
              115, 168, 169,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.amazon.com/Contigo-AUTOSEAL-Kangaroo-Compartment-24-Ounce/dp/B003KZKE4Y/ref=sr_1_1?ie=UTF8&qid=1389259377&sr=8-1&keywords=Contigo+AUTOSEAL+Kangaroo+Water+Bottle+with+Storage+Compartment+-+24+oz.+-+Turquoise&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206132,
            ProductTitle: "Fisher-Price See 'n Say The Farmer Says",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nKids get four fun ways to play\nSing along with Old MacDonald and Farmer in the Dell melodies\nListen to animal songs, or play fun quiz games and even have counting fun\nTeaches kids fun facts about 16 different animals\nHave fun and learn at the same time\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/81JDZ-onR2L._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 13.88,
            PriceLabel: "$13.88",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100, 104, 111, 114, 168, 169,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.amazon.com/Fisher-Price-See-Say-Farmer-Says/dp/B001D0C70C/ref=sr_1_18?s=toys-and-games&ie=UTF8&qid=1395048185&sr=1-18&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206265,
            ProductTitle: "Hudson Baby Multi-Fabric Blanket",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\n100% Polyester\nDifferent textures to spark baby\'s curiosity\n30 x 40 inches\nMulti Uses! Sleeping, Cuddling, Play time, Stroller Cover, Car Seat Cover\nMachine Washable\nComes with Gift Ribbon for easy gift giving\nHudson Baby Multi-Fabric Blanket is a unique and playful blanket from our premium Hudson Baby collection. This is blanket is super soft and gentle on baby\'s skin, but durable and machine washable for everyday use. This blanket features a patchwork of four luxe fabrics: curled mink, embossed coral fleece, dot mink, and solid mink with micro mink backing. The different colors and textures will delight baby\'s mind and sense of touch as they explore. Our blanket measures a generous 30 x 40 inches, so it is perfect for sleeping, swaddling, cuddling, belly time, or even as a stroller or car seat cover. This item arrives with a gift ribbon tied around so it is ready to give with no extra wrapping necessary! Perfect for last minute gift ideas!\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/51bB452XTYL.jpg",
            ThumbnailProductImage: null,
            Price: 13.99,
            PriceLabel: "$13.99",
            ProductTags: [
              3, 4, 5, 6, 7, 8, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86,
              90, 91, 92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/Hudson-Baby-Multi-Fabric-Blanket-Pink/dp/B0091537C8/ref=sr_1_14?s=baby-products&ie=UTF8&qid=1395045862&sr=1-14&keywords=blanket&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206144,
            ProductTitle: "Sassy Crib and Floor Mirror",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nSassy Crib and Floor mirror inspires baby\'s vision, touch, exploration and communication and manipulation skills with high contrast colors, character faces and simple patterns and realistic forms. Includes high contrast tracker ball for visual stimulation and perception. Textures and fun characters of lady bug and butterfly keep baby\'s attention. Textured leaves offer fun peek-a-boo play. Easel back allows mirror to be used on floor or attaches to crib with elastic. Paint, phthalate and BPA free.\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/510odR%2BaWCL.jpg",
            ThumbnailProductImage: null,
            Price: 14.99,
            PriceLabel: "$14.99",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100, 104, 111, 114, 168, 169,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.amazon.com/Sassy-Crib-and-Floor-Mirror/dp/B002J4U8M0/ref=sr_1_37?s=toys-and-games&ie=UTF8&qid=1395048265&sr=1-37&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206161,
            ProductTitle: 'Melissa & Doug Brianna - 12" Doll',
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nThis sweet smelling, soft-bodied baby doll is just waiting for a little mommy to love her. With her open and close eyes, and shiny brunette hair, Brianna comes in a removable two-piece outfit with a charming embroidered heart and flower. She can suck her thumb or her included pacifier, lie down or sit up�just like a real baby.\n\nBrianna can suck her thumb or her included pacifier\nLies down and sits up\nRemovable two-piece outfit with embroidered heart and flower\nSweet smelling, soft-bodied baby doll\nExceptional Quality and value\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/71ms7bU-jUL._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 16.53,
            PriceLabel: "$16.53",
            ProductTags: [
              3, 4, 5, 6, 7, 8, 9, 10, 11, 28, 31, 33, 42, 44, 50, 51, 52, 66,
              72, 85, 86, 90, 91, 92, 96, 97, 98, 99, 100, 104, 111, 114, 168,
              169,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.amazon.com/dp/B0037V0Q62/?tag=weeblykm-20&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206304,
            ProductTitle: "Sesame Street Playskool Potty Time Elmo Plush Toy",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nHelp Elmo go to the potty\nGive Elmo a drink, lower his pants and sit him on the potty\nWhen Elmo uses the potty in time, he sings a reward song to celebrate\nWhen Elmo has an accident, he sings an accident song\nIncludes reward chart and stickers\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/81up7gfqO5L._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 17.98,
            PriceLabel: "$17.98",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100, 104, 111, 114, 168, 169,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.amazon.com/Sesame-Street-Playskool-Potty-Plush/dp/B00C3WXKPU/ref=sr_1_19?s=toys-and-games&ie=UTF8&qid=1395047885&sr=1-19&keywords=doll&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206169,
            ProductTitle: "black+blum Box Appetit",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nA revolutionary new lunch box. More like a ceramic bowl than your standard food container and with better functionality. The \'glass like\' lid locks to the body for a water tight seal and has an ingenious sauce dipping area (great for sushi lovers). A sauce pot is ideal for salad dressing (or ketchup), so you can dress your salad just before you eat it. An inner dish allows you to split different foods so you can microwave a hot dish, but keep other foods cold. We have now retooled the lid mould so that the hinges can be bent all of the way round, making them stronger and more malleable hence eliminating the problem found with earlier production lids.\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/61LWsy3aBJL._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 20.69,
            PriceLabel: "$20.69",
            ProductTags: [
              1, 2, 3, 4, 5, 17, 18, 19, 28, 29, 30, 33, 42, 44, 50, 51, 52, 66,
              72, 85, 86, 88, 90, 91, 93, 188,
            ],
            IsTopGift: true,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/Black-Blum-Box-Appetit-Lime/dp/B003DPAR9S/ref=sr_1_4?ie=UTF8&qid=1389257868&sr=8-4&keywords=Stackable+Lunch+Pot&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 205309,
            ProductTitle:
              "The Newlywed Cookbook: Fresh Ideas and Modern Recipes for Cooking With and for Each Other Hardcover",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nThis cookbook is an indispensable reference for modern couples looking to spend quality time together in the kitchen.\n1\n Inside are more than 130 recipes for both classic and contemporary cooking that are perfect for day-to-day deux and special occasions with family and friends. More than a collection of recipes, The Newlywed Cookbook is also a guide to domestic bliss. Author Sarah Copeland, a newlywed herself, knows that sourcing, cooking as well as sharing food together at the table makes for a happy couple! This beautiful and sophisticated contemporary cookbook is the new go-to for brides and grooms.\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/51Cc%2BPrcoML.jpg",
            ThumbnailProductImage: null,
            Price: 20.91,
            PriceLabel: "$20.91",
            ProductTags: [
              1, 4, 6, 7, 28, 30, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 96, 97, 98, 99, 100, 111, 113, 168,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.amazon.com/The-Newlywed-Cookbook-Recipes-Cooking/dp/0811876837/ref=sr_1_1?ie=UTF8&qid=1389256782&sr=8-1&keywords=newlywed+cookbook&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206175,
            ProductTitle:
              "Broadway Basketeers Organic and Natural Healthy Gift Basket - A Healthy Gift Basket",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nGreat gourmet gift for valentines day, birthday, thank you or any occasion!\nPerfect gift basket for family and friends, or as a corporate office gift\nGift Basket contains: organic cherry sweets, a dried fruit medley, organic tea in three flavors, organic cheddar cheese sandwich crackers, organic peanut butter cookies, and an organic chocolate bar\nGIFT BASKET DIMENSIONS: 5" x 7" x 9" high\nKosher Certified OK D. Giving a kosher gift ensures that all recipients can enjoy and partake in your gift\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/71fcC9BmA2L._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 20.97,
            PriceLabel: "$20.97",
            ProductTags: [
              1, 2, 3, 4, 6, 28, 29, 30, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85,
              86, 90, 91, 92, 104,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/Broadway-Basketeers-Organic-Natural-Healthy/dp/B003U7WC9M/ref=sr_1_1?ie=UTF8&qid=1388484886&sr=8-1&keywords=organic+gift+basket&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206303,
            ProductTitle:
              "Taggies Little Taggies Blanket, Pink Flowers and Butterflies",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nVibrant, textured and engaging tags around each border\nUltra soft blanket\nMachine washable\n12" x 12"\nAges 0m+\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/41ppzXUkyqL.jpg",
            ThumbnailProductImage: null,
            Price: 22.99,
            PriceLabel: "$22.99",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100, 104, 111, 114, 168, 169,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.amazon.com/Taggies-Little-Blanket-Flowers-Butterflies/dp/B00C2SDM1W/ref=pd_sim_ba_24?ie=UTF8&refRID=02Q9D56RCFWMXWQC0X1F&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206218,
            ProductTitle:
              "Baby / Infant Girls 6 Pairs of Ballerina Socks by Trumpette 0-12",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\n80% Cotton, 17% Nylon, and 3% Spandex\npull-on closure\nMachine wash cold. Do not bleach. Tumble dry low.\nSix pairs of adorable socks come in a decorative box.\nSocks look like adorable shoes with a satin bow.\nSocks are white with yellow, pink, purple, fuchsia, blue and black ballet shoe design.\nSocks have a soft elastic top to help keep them on your little ones feet.\nSocks say "Trumpette" on the bottom in a slip resistant material.\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/51T5QNO-qLL._SY679_.jpg",
            ThumbnailProductImage: null,
            Price: 24.5,
            PriceLabel: "$24.50",
            ProductTags: [
              4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100, 104, 111, 114, 168, 169,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.amazon.com/Trumpette-Ballerina-Infant-Socks-Months/dp/B00571F458/ref=sr_1_3?s=baby-products&ie=UTF8&qid=1395046159&sr=1-3&keywords=Trumpette+Socks&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206165,
            ProductTitle:
              "Aveeno Baby Gift Set, Daily Care Essentials Basket, Baby and Mommy Gift Set",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nIncludes a variety of Aveeno Baby essential products\nSoothe your baby\'s delicate, dry skin\nPediatrician Recommended\nPlus Free Tote ; 100% Natural Cotton Canvas\nDiscover the Power of Active Naturals\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/911JdGzPe6L._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 24.99,
            PriceLabel: "$24.99",
            ProductTags: [
              1, 2, 4, 5, 18, 19, 28, 30, 33, 42, 44, 50, 51, 52, 66, 72, 85,
              86, 88, 90, 91, 96, 97, 98, 99, 100, 111, 113, 115, 168,
            ],
            IsTopGift: true,
            IsPopularGift: true,
            ProductLink: "/NoImageProduct.jpg?tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206290,
            ProductTitle:
              "CTA Digital 2-in-1 iPotty with Activity Seat for iPad",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nComfortable and child-friendly potty with activity stand for iPad (2nd, 3rd, and 4th generation)\nAdjustable stand securely holds and helps protect iPad while kids play\nEasy to clean with removable inner potty bowl, potty seat and splashguard\nClear touchscreen protector guards against smudges and messy hands\n360� Rotating stand easily switches between horizontal and vertical views\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/81tFR7ktW9L._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 34.5,
            PriceLabel: "$34.50",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/CTA-Digital-iPotty-Activity-Seat/dp/B00B3G8UGQ%3FSubscriptionId%3DAKIAJFDWI7DARHXWAJGA%26tag%3Dgiftscom07-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00B3G8UGQ?tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206149,
            ProductTitle: "Peanut Shell Nursing Cover",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nMade from premium quality super-soft 97% cotton sateen and 3% spandex; generous sizing keeps Mom covered during breastfeeding\nPremium details include feminine contouring, accent piping, and boning in the neckline so you can keep an eye on your baby while covered\nIncludes adjustable button clasp to fit your growing baby and easily accessible inside pocket for holding nursing pads and pacifier; even use it as a stroller cover\nMachine washable\nCoordinating diaper clutches, burp cloths, slings, and other Peanut Shell travel and feeding accessories are also available to achieve the height of fashion\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/91n0%2B8LY4qL._SY450_.jpg",
            ThumbnailProductImage: null,
            Price: 36.37,
            PriceLabel: "$36.37",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90, 91,
              92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/dp/B0046H995U/ref=twister_B002S52XD2?tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206316,
            ProductTitle: "Fisher-Price Infant-To-Toddler Rocker",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nAdorable bunny print rocker with a snap-in toy bar\nFeatures an infant rocker with a fold out kickstand\nCan also be used as a toddler rocking seat\nEasily converts the rocker to a stationary seat for feeding or sleeping\nShips in Certified Frustration-Free Packaging\nCan support weights up to 40 pounds\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/61c7ld9bayL._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 36.66,
            PriceLabel: "$36.66",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100, 104,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/Fisher-Price-BMH11-Infant-To-Toddler-Rocker-Bunny/dp/B00CWN3HRQ/ref=sr_1_1?s=baby-products&ie=UTF8&qid=1395046020&sr=1-1&keywords=bunny+rocker&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206238,
            ProductTitle: "Baby Einstein Sea Dreams Soother",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nSoft lights and 25 plus minutes of classical music will soothe baby to sleep with the Sea Dreams Soother. The unique underwater light effect, motion of the baby Neptune characters, and real life imagery will help calm baby. The unique drift off feature gradually softens music every 10 minutes to help baby fall asleep. There are 4 soothing modes: melodies-lights-motion, melodies only, ocean sounds-lights-motion, and ocean sounds only. The universal perfect fit crib attachment allows it to fit most crib rails and the soother can also be used bedside for toddlers.\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/71PhT5dDnUL._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 39.06,
            PriceLabel: "$39.06",
            ProductTags: [
              3, 4, 5, 6, 7, 8, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86,
              90, 91, 92, 96, 97, 98, 99, 100, 104,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/Baby-Einstein-Sea-Dreams-Soother/dp/B006YBHE6M/ref=zg_mg_166875011_3?tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 205428,
            ProductTitle:
              "All In One Picnic Travel Backpack Plates Cutlery Set",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nPlace setting for four; 30 pieces, hand wash\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/71DwD-BfRcL._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 41.6,
            PriceLabel: "$41.60",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90, 91,
              96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/Picnic-Travel-Backpack-Plates-Cutlery/dp/B004WKW6D8/ref=sr_1_7?ie=UTF8&qid=1389257312&sr=8-7&keywords=Picnic+Backpack&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206296,
            ProductTitle: "Sweet Baby Girl Gift Basket",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nThe perfect present for proud new parents\nA complete pink comfy baby outfit - size 0-6 months\nPants, shirt, hat, and a pair of booties\nCute pink washcloth and matching socks included\nPackaged in a wicker basket and matching box\n\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/61p2kWETN2L._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 43.99,
            PriceLabel: "$43.99",
            ProductTags: [
              4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/Sweet-Baby-Girl-Gift-Basket/dp/B00BNLD7T6/ref=sr_1_17?s=home-garden&ie=UTF8&qid=1394695129&sr=1-17&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206172,
            ProductTitle: "Nikki's Pink Baby Blossom Clothing Gift Bouquet",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nInfant girl clothing gift basket\nBibs, onesies, blankets, and more\nOnesies are sized for 3 to 6 months\nDesign mimics a flowerpot\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/61eckC0dEcL._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 44.99,
            PriceLabel: "$44.99",
            ProductTags: [
              2, 5, 17, 18, 19, 28, 29, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85,
              86, 90, 91, 92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/Nikkis-Baby-Blossom-Clothing-Bouquet/dp/B003Q8WT6G/ref=pd_bxgy_ba_img_y?tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206231,
            ProductTitle:
              'Fellowes Saturn2 95 Laminator, 9.5" with 10 Pouches (5727001)',
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nDesigned for use in the classroom or small office, the Fellowes Saturn 2 95 9.5-Inch Laminator has user-friendly controls for safe, efficient laminating. Heating up in only five minutes, the Saturn 2 features advanced temperature control, ensuring smooth, consistent results every time. For added safety, HeatGuard Technology traps heat inside the laminator, so the outside is always comfortable to touch. Fast and easy to use, the Saturn 2 is an essential tool for improving the appearance and longevity of your projects.\n\nDesigned for small office applications\n9-1/2" entry width accommodates multiple document sizes\nHot lamination for 3-mil or 5-mil pouches; ready in 5 minutes\nCold setting for laminating self-adhesive pouches\nHeatGuard Technology keeps heat inside so laminator is cool to touch\nRelease lever disengages pouch for re-centering or removal\nIncludes laminating starter kit\n� See more product details\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/61iPWtN6P0L._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 49.09,
            PriceLabel: "$49.09",
            ProductTags: [
              1, 2, 4, 5, 18, 19, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85,
              86, 90, 91, 92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/dp/B006CTK3IW/?pf_rd_p=1689812462&pf_rd_s=merchandised-search-7&pf_rd_t=101&pf_rd_i=7258721011&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=0ZK6YDT43NRCNFV4XV7F&ref_=acs_ux_sfg_1_ceacc&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206202,
            ProductTitle: "Kids Line Dena Happi Tree Lamp Base and Shade, Pink",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nThe Dena happi Tree lamp base and shade is the perfect way to softly illuminate your nursery\nRequires one 60 watt bu pound maximum, Included\nOn/off switch conveniently located on approximately 46" cord\n\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/817HlVDCCTL._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 49.99,
            PriceLabel: "$49.99",
            ProductTags: [
              2, 3, 4, 5, 6, 7, 18, 19, 28, 29, 31, 33, 42, 44, 50, 51, 52, 66,
              72, 85, 86, 90, 91, 92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/Kids-Line-Dena-Happi-Shade/dp/B004P1IVXS/ref=zg_mg_166875011_51?tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206353,
            ProductTitle:
              "Samsung Galaxy Tab 3 Kids Edition (7-Inch with Orange Bumper Case)",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nWith a bright, easy-to-use interface, kid-friendly app store, and durable case, the Samsung Galaxy Tab 3 Kids is the ideal tablet for your kids\' digital playing and learning time. Preloaded with top-ranked apps for kids, the lightweight Galaxy Tab 3 Kids also features a built-in camera and parental controls for access and time limits. It transforms from kid to standard mode so you can enjoy the same familiar features as a regular Galaxy Tab 3.\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/8141w8Y%2BZeL._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 199.0,
            PriceLabel: "$199.00",
            ProductTags: [
              3, 5, 6, 28, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90, 91, 96,
              97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/dp/B00F3U2H80/?pf_rd_p=1666324682&pf_rd_s=merchandised-search-4&pf_rd_t=101&pf_rd_i=7258721011&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=0ZK6YDT43NRCNFV4XV7F&ref_=acs_ux_sfg_4_pcNtabs&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206500,
            ProductTitle:
              "VIZIO M551d-A2R 55-Inch 1080p 240Hz 3D Smart LED HDTVasddddddddddddddddddd asjhasjkthkjawhtraksjhtaksj asdasjhfkajsfhaksjfhkasjhf kjasfhkjashfkjashfkjsafh kjhsafkj haskjghaktjqntqkjwtkjwht kjqwhtkjqwhtkj qhwtkjqwhtk test astahkjsthat test 81274981275 test asfhkajshfka test ashfkajshfk tesatjaskljhatkjhaktjhaskjt htesaat astjhaskjt test enough? ",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nThe stylishly modern VIZIO M-Series 55" Razor LED Smart TV with Theater 3D is crafted to redefine your entertainment experience with near edge-to-edge picture and must-have features that elevate your viewing to a new level.\nM-Series TVs feature a razor-thin profile made possible by dazzling premium Razor LED backlighting that lines the interior perimeter of every M-Series screen and delivers brilliant picture at a fraction of the space and energy usage.\nVIZIO Internet Apps Plus - Instantly enjoy the latest hit movies, TV shows, music and even more apps made for the big screen\nTheater 3D - Crystal-clear, flicker-free, brighter 3D than conventional 3DTVs; Built-in Wi-Fi - easily connect to the Internet with ultra fast wireless\nRazor LED with Smart Dimming for a more vibrant picture with deeper contrast - all in an ultra-thin design\n240Hz effective refresh rate with Smooth Motion enhanced with backlight scanning - Enjoy stunningly sharp fast action scenes\nDimensions: With Stand: 48.61"W x 30.56"H x 10.12"D; Without Stand: 48.61"W x 28.50"H x 1.75"D; Packaging Dimensions: 55.39"W x 36.06"H x 5.43"D\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/81Z5Vtf3UfL._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 950.0,
            PriceLabel: "$950.00",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90, 91,
              92, 96, 97, 98, 99, 100, 104, 111, 112, 113, 114, 115, 168, 169,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.amazon.com/VIZIO-M551d-A2R-55-Inch-1080p-240Hz/dp/B00CBQNB0C/ref=sr_1_3?ie=UTF8&qid=1387271524&sr=8-3&keywords=VIZIO+M601d-A3R+60-Inch+1080p+240Hz+3D+Smart+LED+HDTV&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
          {
            ProductId: 206363,
            ProductTitle: "Sony HMZ-T3W Head Mounted 3D Viewer",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other of the millions of items on Amazon.com\r\n\r\nProduct Description:\r\n\r\nGet into the Personal 3D Viewer from Sony. Connect your Blu-ray Disc player, gaming console and HMDI-capable PC all wirelessly and even connect compatible mobile devices and smartphones to enjoy your favorite movies and games with a virtual 750-inch screen from 65 feet (like a movie theater) and virtual 7.1 Surround Sound�even in 3D! Now playing for your eyes and ears only.\r\n\r\n\r\n*Instructions for the gift recipient*\r\n\r\nTo redeem your gift card, follow these steps: \r\n1. Visit www.amazon.com/gc. \r\n2. Click Apply to Account and enter the claim code when prompted. \r\n3. These gift card funds will be applied automatically to eligible orders during the checkout process. \r\n4. You must pay for any remaining balance on your order with a credit card or other acceptable form of payment. \r\n\r\nYour gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the Amazon.com 1-Click� service or downloadable products unless you first redeem the gift card to Your Account. \r\nIf you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem. If you have questions regarding the XYZ Company offer, please contact XYZ Company.\r\n \r\n*Amazon.com is not a sponsor of this promotion. Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. GCs cannot be redeemed for purchases of gift cards. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com. Amazon is not responsible if a GC is lost, stolen, destroyed or used without permission. For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. All Amazon �, � & � are IP of Amazon.com, Inc. or its affiliates. No expiration date or service fees.',
            ProductImage:
              "http://ecx.images-amazon.com/images/I/617QkSDktcL._SL1500_.jpg",
            ThumbnailProductImage: null,
            Price: 998.0,
            PriceLabel: "$998.00",
            ProductTags: [
              2, 4, 8, 28, 29, 30, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86,
              90, 91, 92, 104,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/dp/B00FNJGJN0/?pf_rd_p=1685313862&pf_rd_s=merchandised-search-4&pf_rd_t=101&pf_rd_i=7258691011&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=15Y0VZM60YBVBC7NN86Z&ref_=acs_ux_sfg_1_AV&tag=jifiti-20",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 200,
          },
        ],
        StoreName: "Amazon",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/Amazon.png",
        StoreOrder: 2,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/Amazon.png",
        IsAffiliate: null,
        StoreText: null,
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: 200,
        StoreId: 1222,
        DeliveryType: 1,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 205637,
            ProductTitle: "Eddy Glass Bottle by Camelbak",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Athleta\r\n\r\nProduct Description:\r\n\r\nThe CamelBak?� glass water bottle with an easy-...",
            ProductImage:
              "http://athleta.gap.com/webcontent/0005/902/364/cn5902364.jpg",
            ThumbnailProductImage: null,
            Price: 25.0,
            PriceLabel: "$25.00",
            ProductTags: [
              1, 2, 4, 5, 17, 18, 19, 28, 29, 30, 33, 42, 44, 50, 51, 52, 66,
              72, 85, 86, 88, 90, 91, 96, 97, 98, 99, 100, 111, 112, 113, 115,
              168,
            ],
            IsTopGift: true,
            IsPopularGift: true,
            ProductLink:
              "http://athleta.gap.com//browse/search.do?sem=true&searchText=317727042",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
        ],
        StoreName: "Athleta",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/athleta_logo.png",
        StoreOrder: 2,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/athleta_logo.png",
        IsAffiliate: null,
        StoreText:
          "Don't worry about size or color, the recipient makes the final choice",
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: null,
        StoreId: 204,
        DeliveryType: 1,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 206110,
            ProductTitle:
              "The First Years American Red Cross Deluxe Baby Healthcare and Grooming Kit",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Best Buy\r\n\r\nProduct Description:\r\n\r\n17-piece kit of healthcare and grooming essentials\nDeluxe travel / storage bag for home or on the go\nIncludes a comprehensive baby care, wellness and safety guide\nExcellent baby shower gift!\n6 months and up",
            ProductImage:
              "http://ecx.images-amazon.com/images/I/51M7C5FJDDL.jpg",
            ThumbnailProductImage: null,
            Price: 18.15,
            PriceLabel: "$18.15",
            ProductTags: [
              1, 2, 3, 4, 5, 9, 14, 18, 28, 29, 30, 33, 42, 44, 50, 51, 52, 66,
              72, 85, 86, 90, 91, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.amazon.com/The-First-Years-American-Healthcare/dp/B000LZFZVS/ref=pd_sim_hpc_1",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
          {
            ProductId: 209714,
            ProductTitle: "Beats by Dr. Dre - Solo 2 On-Ear Headphones - Red",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Best Buy\r\n\r\nProduct Description:\r\n\r\nThese Beats by Dr. Dre Solo 2 900-00136-01 on-ear headphones feature a compact, foldable design for easy portability. The included RemoteTalk cable lets you take calls and control music with most iOS devices.",
            ProductImage:
              "http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5566/5566001_ra.jpg;canvasHeight=500;canvasWidth=500",
            ThumbnailProductImage: null,
            Price: 199.99,
            PriceLabel: "$199.99",
            ProductTags: [
              1, 2, 17, 18, 19, 28, 29, 30, 33, 38, 42, 44, 50, 51, 52, 66, 72,
              85, 90, 91, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.bestbuy.com/site/beats-by-dr-dre-solo-2-on-ear-headphones-red/5566001.p?id=1219139431566&skuId=5566001&st=categoryid$abcat0204000&cp=1&lp=16",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
          {
            ProductId: 209712,
            ProductTitle:
              'Panasonic - 55" Class (54-5/8" Diag.) - LED - 1080p - 120Hz - Smart - HDTV',
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Best Buy\r\n\r\nProduct Description:\r\n\r\nPanasonic TC-55AS530U LED HDTV:This Panasonic TV's built-in Wi-Fi allows you to wirelessly stream music, movies and TV shows. Boasting an expansive 1080p LED display and 240 Back Light Blinking technology, the TV offers crisp, clear images with vibrant color.",
            ProductImage:
              "http://pisces.bbystatic.com/image2/BestBuy_US/images/products/3924/3924148_sd.jpg;canvasHeight=300;canvasWidth=500",
            ThumbnailProductImage: null,
            Price: 699.99,
            PriceLabel: "$699.99",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
              61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
              77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 90, 91, 92, 93, 96, 97,
              98, 99, 100, 104, 111, 112, 113, 114, 115, 116, 117, 118, 119,
              120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132,
              133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145,
              146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158,
              159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 171, 172,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.bestbuy.com/site/panasonic-55-class-54-5-8-diag--led-1080p-120hz-smart-hdtv/3924148.p?id=1219094473546&skuId=3924148",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
        ],
        StoreName: "Best Buy",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/bestbuy.png",
        StoreOrder: 2,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/bestbuy.png",
        IsAffiliate: null,
        StoreText: "The hottest tech toys out there.",
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: null,
        StoreId: 206,
        DeliveryType: 1,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 208246,
            ProductTitle: "!@#$%^&**(()_+<>,/.\\|][{};:'\"`~+=_*|@(���",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Torrid\r\n\r\nProduct Description:\r\n\r\nasdfkdjsg\nasdfkdjsg\nasdfkdjsgas\ndfkdjsgasd\nfkdjsgasd\n\nfkdjsgasd\nfkdjsgasd\n\nfkdjsgasd\n\nfkdjsgasd\n\nfkdjsgasd\nfkdjsgasd\nfkdjsgasdf\nkdjsgasdfk\ndjsgasdfkdjs\ngasdfk\ndjsgasdfkdjs\ngasdfkdjsgas\ndfkdj\nsgasdfkdjsga\nsdfkdjsgasdfk\ndjsgasdfkdjsg\n\nasdfkdjsgas\n\n\ndfkdjsgasdf\n\nkdjsgasdfkdjs\n\nasdfkdjsgasdfkd\n\njsgasdfkdjsgasd\nfkdjsgasdfkdjsg\n\nasdfkdjsgasdf\n\nkdjsgasdfkdjs\n\ngasdfkdjsgasd\n\nfkdjsgasdfkdj\n\nsgasdfkdjsgas\n\ndfkdjsgasdfkd\n\njsgasdfkdjsg",
            ProductImage:
              "http://3.bp.blogspot.com/-8zw2_9ZwegE/UQfyqsR4_wI/AAAAAAAAAA0/llFp-WIvE-E/s320/testbild_1297949508.jpg",
            ThumbnailProductImage: null,
            Price: 100.0,
            PriceLabel: "$100.00",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 28,
              29, 30, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90, 91, 92,
              96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink: "",
            IsAffiliate: true,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
        ],
        StoreName: "Torrid",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/Torrid.png",
        StoreOrder: 4,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/Torrid.png",
        IsAffiliate: null,
        StoreText: null,
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: null,
        StoreId: 201,
        DeliveryType: 1,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 209695,
            ProductTitle: "Rosette Knit Cap",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at The Children's Place\r\n\r\nProduct Description:\r\n\r\nAs fashionable as it is warm!\n\nIn sweater-knit 100% acrylic jersey with metallic threading\nRib-knit cuff\nNote: Heather Grey color is Web only. Can only be returned by mail.",
            ProductImage:
              "http://www.childrensplace.com/wcsstore/GlobalSAS/images/tcp/products/500/2027366_HE.jpg",
            ThumbnailProductImage: null,
            Price: 8.95,
            PriceLabel: "$8.95",
            ProductTags: [
              4, 5, 6, 7, 8, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.childrensplace.com/webapp/wcs/stores/servlet/en/usstore/p/baby-girl-clothes/baby-girl-clothes/baby-girls-accessories/rosette-knit-cap-2027366-HE",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
        ],
        StoreName: "The Children's Place",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/TheChildrensPlace.png",
        StoreOrder: 6,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/TheChildrensPlace.png",
        IsAffiliate: null,
        StoreText:
          "Don't worry about size or color, the recipient makes the final choice",
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: null,
        StoreId: 194,
        DeliveryType: 1,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 205550,
            ProductTitle: "Sofia The First Step Stool",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\nThe Kids Only Step Stool is the perfect handy helper for your child, with their favorite character along to assist! Perfect as a seat or a stool, this Classic Step Stool features rubber feet to protect floor surfaces and a slip resistant top. Colorful character graphics. Plastic surface wipes clean with just a damp cloth! Product dimensions: 15.38"l x 8.0"h x 11.75"d and recommended weight limit 100 lbs. For ages 3-7 years.',
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-16503760dt.jpg",
            ThumbnailProductImage: null,
            Price: 9.99,
            PriceLabel: "$9.99",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100, 104, 111, 114, 168, 169,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=23062236&cp=2255956.2273442.4213325.4083735.4083735&parentPage=search",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205563,
            ProductTitle: "A Child's Gift Of Lullabies CD",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\nVarious Artist A Childs Gift Of Lullabyes is a childrens CD from New Haven. Released on June 04, 2002.\n",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-3118951dt.jpg",
            ThumbnailProductImage: null,
            Price: 9.99,
            PriceLabel: "$9.99",
            ProductTags: [
              3, 4, 5, 6, 7, 8, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86,
              90, 91, 92, 96, 97, 98, 99, 100, 104,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=2439833&cp=&parentPage=search",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205619,
            ProductTitle:
              "Little Scholastic Old MacDonald: Touch and Play Hand Puppet Board Book",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\nWith the Old MacDonald Hand Puppet Board Book, parent and child can quack-quack and moo-moo away while they play and touch the five farm animal finger puppets, including a duck, a cow, a pig, a cat, and a dog. This developmental book is built into a fleece glove, and has five pages, one for each of the five animals. Glove length: 9". Published by Scholastic, Inc, 2004. Genre: Learning.',
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-4278386dt.jpg",
            ThumbnailProductImage: null,
            Price: 12.99,
            PriceLabel: "$12.99",
            ProductTags: [
              1, 3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86,
              90, 91, 92, 96, 97, 98, 99, 100, 104,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=2957533&cp=2255956.3053760.13041269&parentPage=search",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205652,
            ProductTitle:
              "Fisher-Price Ocean Wonders Soothe and Glow Seahorse - Pink",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\n\nThe Fisher-Price Pink Soothe & Glow Seahorse makes a great nighttime friend to help soothe your baby to sleep. The seahorse features a light up tummy along with soft music, lullabies and the soothing sounds of the ocean. After five minutes, the music fades and the lights dim, so your baby can peacefully drift to sleep. Batteries required.\nSoft and cuddly texture\nPlays soothing music, lullabies and the sounds of the ocean\nLight-up tummy with a heart and music note on the center\nMusic fades and lights dim after five minutes",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-5764012_alternate2_dt.jpg",
            ThumbnailProductImage: null,
            Price: 14.99,
            PriceLabel: "$14.99",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=3508447&cp=2255956.3053760.13041269.13041269&parentPage=search",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205576,
            ProductTitle: "Lamaze Musical Inchworm",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\nA soft, colorful friend for your baby, the Lamaze� Musical Inchworm toy from Learning Curve� includes rattles, squeaks, crinkles, jingles, and interesting textures for your baby to discover and explore. When your baby hugs Inchworm's head, he will play \"If you are happy and you know it clap your hands\". Colors may vary.\n\nThe Lamaze brand inspires creativity and discovery. To new moms who see wonder and possibility in their baby's eyes, Lamaze is the leader in high quality, giftable infant development toys that inspire creativity and discovery because only Lamaze is designed with unexpected features, juicy colors, whimisical characters and engaging textures.",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-3418737dt.jpg",
            ThumbnailProductImage: null,
            Price: 15.99,
            PriceLabel: "$15.99",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100, 104, 111, 114, 168, 169,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=2582539&cp=2255956.3053760.13041269&parentPage=search",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205618,
            ProductTitle: "Vtech Spin 'n Learn Top",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\nWith four modes of play, the Spin 'n Learn Top has lots of ways to get baby started learning early. Press the top button and watch the cute animal characters spin around. Press the number buttons to hear each character give a new response, including numbers and silly sounds. The dancing lights and interactive responses are sure to encourage baby to play and learn! ",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-4255232dt.jpg",
            ThumbnailProductImage: null,
            Price: 16.99,
            PriceLabel: "$16.99",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=2944897&cp=2269725.10811240&parentPage=family",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205632,
            ProductTitle: "Vtech Learn & Dance Interactive Zoo",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\nMeet, greet, and learn something neat at the Learn & Dance Interactive Zoo! This interactive zoo features 4 brightly colored buttons that introduce new animal friends through short, playful songs. Spin the roller to meet some turtles, press on the toucan to hear what he has to say, or get the monkey moving with the fun to manuever joystick. Baby's simple touch will activate an engaging animal adventure!\n",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-4581098dt.jpg",
            ThumbnailProductImage: null,
            Price: 19.99,
            PriceLabel: "$19.99",
            ProductTags: [
              3, 4, 5, 6, 7, 8, 9, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85,
              86, 90, 91, 92, 96, 97, 98, 99, 100, 104, 111, 114, 168, 169,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=3050989",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205642,
            ProductTitle: "LeapFrog Alphapup - Pink",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\nExperience the ABC's with your new best friend! AlphaPup is the perfect learning companion, walking and talking the ABC's with your child. AlphaPup sounds out each letter and introduces letter names, words that begin with each letter and darling doggie phrases. \n",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-18073589dt.jpg",
            ThumbnailProductImage: null,
            Price: 19.99,
            PriceLabel: "$19.99",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100, 104, 111, 114, 168, 169,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=33114186&cp=2255956.3053760.13041269&parentPage=search",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205654,
            ProductTitle:
              "Bright Starts Tummy Cruiser Prop & Play Mat - Pretty in Pink",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\n\nMake tummy time fun with this Kids II Bright Starts Pretty in Pink Tummy Cruiser Prop & Play Mat. This car-shaped mat is designed with friendly character faces, welcoming all babies to engage in a fun and comfortable playtime experience. The soft mat encourages tummy-time play and exercise, and the mat design offers two orientations of play for variety. The detachable prop pillow features a ring rattle to keep your baby entertained and a water-filled teether key to soothe your baby�s gums. The activity dashboard features a steering wheel that turns and clicks, a crinkle flap and a baby-safe mirror. Four loops allow you to attach your baby�s favorite toys so he or she can continue to have fun, exercise and be comfortable. Machine washable. A portion of the proceeds goes to support breast cancer charities.\nThe soft, padded, car-shaped mat encourages tummy-time play and exercise\nMat design offers two orientations of play for variety\nDetachable prop pillow helps your baby stay comfortable during tummy-time play\nRing rattle will help you keep your baby entertained\nWater-filled teether key to help soothe baby�s gums\nActivity dashboard features a steering wheel that turns and clicks, a car-shaped link, a crinkle flap and a baby-safe mirror\nFour loops are designed to accommodate your baby�s favorite toys\nMachine washable\nA portion of the proceeds goes to support breast cancer charities",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-6074162dt.jpg",
            ThumbnailProductImage: null,
            Price: 19.99,
            PriceLabel: "$19.99",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100, 104,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=3612691&cp=2269725.10811240&parentPage=family",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205664,
            ProductTitle: "LeapFrog My Own LeapTop - Violet",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\nThe pretend computer play with the LeapFrog My Own Leaptop in the Pink style gets even better with a new, larger screen! Explore four learning modes and even customize My Own Leaptop to spell your child's name! Send and receive pretend e-mails, learn letters and animal names, and sing along with 16 songs and melodies. Some images below depict an alternate color. Actual product is pink.",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-7304118dt.jpg",
            ThumbnailProductImage: null,
            Price: 22.99,
            PriceLabel: "$22.99",
            ProductTags: [
              3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 28, 31, 33, 42, 44, 50, 51, 52,
              66, 72, 85, 86, 90, 91, 92, 96, 97, 98, 99, 100, 104, 111, 114,
              168, 169,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=4013815&cp=2255956.3053760.13041269&parentPage=search",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205420,
            ProductTitle: "Fisher-Price Laugh & Learn Apptivity Monkey",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\nDr. Toy Best Picks Winner\n\nSeal of Approval (Spring)\n\nThe Apptivity Monkey is an interactive plush learning toy for baby that also lets babies enjoy their very own apps on mom or dads iPhone or iPod touch! Simply place the Apple device into the case located on the monkeys stomach, and twist the lock. Baby can squeeze monkey's hands & feet to interact with the app, which teaches baby about colors, numbers, animals and much more! The monkey entertains baby with 10+ sung-songs, tunes, and phrases without a device inside. Apple products not included. Compatible with iPhone 1G, 3G, 3GS, 4G and iPod Touch 3G and 4G. Download free Fisher-Price Laugh & Learn apps from the App Store on iTunes.",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-13305208enh-z6.jpg",
            ThumbnailProductImage: null,
            Price: 24.97,
            PriceLabel: "$24.97",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=13157022&prodFindSrc=prodCrossSell",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205557,
            ProductTitle: "Fisher-Price Peek-a-Blocks: Shape Sorter",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\nThe Fisher-Price Peek-A-Blocks Shape Sorter teaches your little one about shapes and enhances sensory development. Fascinating discoveries await your baby as he or she attempts to place the blocks into their respective color-coordinated holes. All four of the blocks feature fun surprises that your little one can shake to use as a rattle. Music and sounds reward your child when he or she is able to place a block into the correct spot, encouraging problem-solving skills. Your baby will soon learn that correctly placing a block in its respective place will reward him or her with fun music and sounds. Visually stimulating bright colors will keep your baby's attention, and once he or she is finished playing, simply drop the blocks in the center of the shape sorter for convenient storage.",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-3009484dt.jpg",
            ThumbnailProductImage: null,
            Price: 24.99,
            PriceLabel: "$24.99",
            ProductTags: [
              3, 4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100, 104,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=2383362&cp=&parentPage=search",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205551,
            ProductTitle: "Little Tikes 2-in-1 Snug N Secure Swing - Blue",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\nThis Little Tikes 2 in 1 Snug Secure Swing accommodates babies as young as 9 months and children as old as 48 months! An easy-in T-bar and stay-put shoulder straps hold babies securely in place. As the child grows and doesn't require the T-bar or straps, they store conveniently out of the way at the bottom of the swing. \n\nCarton dimensions are 15.82 inches length x 22.04 inches width x 10.55 inches height - weight 5lbs. \n\nThe Little Tikes Company, founded in 1970, is a multi-national manufacturer and marketer of high-quality, innovative children's products. In November of 2006, Little Tikes became a part of MGA Entertainment. MGA Entertainment is a leader in the revolution of family entertainment. Little Tikes''� headquarters and largest manufacturing facility are located in Hudson, Ohio. The company also has a number of locations outside the United States, including several manufacturing and distribution centers in Europe and Asia. Little Tikes products are known for providing durable, imaginative and active fun. Products are manufactured in a wide variety of categories for young children, including infant toys, popular sports, play trucks, ride-on toys, sandboxes, activity gyms and climbers, slides, pre-school development, role-play toys, creative arts and juvenile furniture. The red and yellow Cozy Coupe� Car, an international icon in toys, celebrated its 25th anniversary in 2004, with more than 6 million units sold since its creation. Little Tikes'' goal is to create and supply innovative products to customers and consumers around the world. To reach that goal, Little Tikes'' associates'' actions are guided by the principles of Customer Satisfaction, Teamwork, Innovation, Marketing and Continuous Improvement.",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-2873162dt.jpg",
            ThumbnailProductImage: null,
            Price: 27.99,
            PriceLabel: "$27.99",
            ProductTags: [
              3, 4, 5, 6, 7, 8, 28, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=2308742&cp=2255956.3053760.13041269.13041269&parentPage=search",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205553,
            ProductTitle:
              "Little Tikes Supermarket Shopping Cart with Fold Down Seat",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\nDurable shopping cart with modern styling includes a large basket to hold play food and groceries. A favorite doll or stuffed toy can ride along in the fold-down seat. ",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-2909334dt.jpg",
            ThumbnailProductImage: null,
            Price: 29.99,
            PriceLabel: "$29.99",
            ProductTags: [
              1, 4, 5, 6, 7, 8, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86,
              90, 91, 92, 96, 97, 98, 99, 100, 104,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=2333039&cp=2255956.3053760.13041269&parentPage=search",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205656,
            ProductTitle: "Step2 101-Piece Play Food Set",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\nThis large assortment of play food by Step2 enhances playtime experiences. Set includes fruits, vegetables, meats, breads, pastries, sandwiches, breakfast, snack, dessert, Italian, Mexican, Japanese and Chinese foods (food may vary).\n\nThe Step2 Company is a family company with toy brands including Step2�, Infantino�, and Thinkativity� that foster learning and development through creative play in children from birth to school-age years. Step2 designs and produces new toys that receive recognition every year for their durability, creative play value, and fun designs. The Step2 Company not only designs and produces innovative toys, it also provides parents and child care professionals access to learn and share information about the importance of creative play.",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-6427692dt.jpg",
            ThumbnailProductImage: null,
            Price: 29.99,
            PriceLabel: "$29.99",
            ProductTags: [
              3, 4, 5, 6, 7, 8, 9, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85,
              86, 90, 91, 92, 96, 97, 98, 99, 100, 104,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=3715533&cp=2255956.3053760.13041269&parentPage=search",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205631,
            ProductTitle:
              "Fisher-Price Brilliant Basics Stroller Styled Walker",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\nWhen your baby is ready for the new world of walking, the Fisher-Price Brilliant Basics Stroll-Along Walker is ready to lend support. The wide base and easy-grasp handle help steady your child's first steps, while adorable stroller styling encourages early role play and nurturing. See the wiggly bear riding on the stroller handle? Your baby can press its tummy for musical rewards or enjoy fun activities with this toy stroller�s spinners, roller bar and flipbook. There�s even room to take a friend along for a stroll (Baby�s 1st Doll not included).",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-4523338dt.jpg",
            ThumbnailProductImage: null,
            Price: 34.99,
            PriceLabel: "$34.99",
            ProductTags: [
              4, 5, 6, 7, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86, 90,
              91, 92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=3027470&cp=2255956.3053760.13041269.13041269&parentPage=search",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205609,
            ProductTitle: "Baby Einstein Baby Neptune Ocean Adventure Gym",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\nLet the underwater adventures begin with the Baby Neptune Ocean Adventure Play Gym by Baby Einstein! This soft activity gym features an electronic aquarium with classical melodies and dancing lights. A whale-shaped prop-up pillow accompanies baby on this aquatic adventure, which comes to life with the crisp and colorful real-life scenery of the sea on the play mat. A soft textured border encourages tactile development.",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-3732689_alternate2_dt.jpg",
            ThumbnailProductImage: null,
            Price: 51.99,
            PriceLabel: "$51.99",
            ProductTags: [
              3, 4, 5, 6, 7, 8, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85, 86,
              90, 91, 92, 96, 97, 98, 99, 100, 104,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=2737988&cp=2269725.10811240&parentPage=family",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
          {
            ProductId: 205417,
            ProductTitle: "Step2 Whisper Ride 2 Buggy - Blue",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Toys R Us\r\n\r\nProduct Description:\r\n\r\n\nThe Step2 Whisper Ride II Buggy � Blue is an updated, roomier version of one of Step2�s best sellers! This cute little machine features a sleek automotive design with soft poly wheels to help provide a smooth, quiet ride. It also features storage under the hood, as well as a handle that can be folded underneath the body to help simplify transport and storage.\nSleek automotive design\nSoft poly wheels provide a smooth, quiet ride\nTwo cup holders for the child and one for mom or dad\nHandle folds under for easy transport and storage\nStorage under the hood\nSeat belt\nHonking horn for riding fun\nWeight capacity: 50 lbs.",
            ProductImage:
              "http://www.toysrus.com/graphics/product_images/pTRU1-13174567_alternate1_dt.jpg",
            ThumbnailProductImage: null,
            Price: 64.99,
            PriceLabel: "$64.99",
            ProductTags: [
              3, 4, 5, 6, 7, 8, 9, 28, 31, 33, 42, 44, 50, 51, 52, 66, 72, 85,
              86, 90, 91, 92, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.toysrus.com/product/index.jsp?productId=13091823&cp=2269725.10811240&parentPage=family",
            IsAffiliate: false,
            ShippingMandatory: true,
            PersonalMessageMaxLength: 100,
          },
        ],
        StoreName: "Toys R Us",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/Toys-R-Us-Logo.png",
        StoreOrder: 10,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/Toys-R-Us-Logo.png",
        IsAffiliate: null,
        StoreText: null,
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: true,
        PersonalMessageMaxLength: 100,
        StoreId: 143,
        DeliveryType: 1,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 206428,
            ProductTitle: "Dragon Shoes",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Adidas\r\n\r\nProduct Description:\r\n\r\nDragon Shoes Dragon Shoes  Bluebird /Running White (G95074) Legend Ink/Ray Yellow (G95072) St Crag//Red (G95073 )  Black /Silver /Black (G95075) Product Information The Dragon shoes are a kids'-size version of a retro running shoe first introduced in the 1970s, complete with a lightweight EVA midsole. They feature a classic nylon upper with synthetic suede overlays, a breathable OrthoLite� sockliner and easy comfort closures for their little feet .  Details  Textile upper with synthetic suede overlays  Hook",
            ProductImage:
              "http://a248.e.akamai.net/f/248/9086/10h/origin-d5.scene7.com/is/image/adidasgroup/G95074_01?wid=500&hei=500&fmt=jpeg&qlt=92,0&resMode=sharp2&op_usm=1.1,0.5,1,0",
            ThumbnailProductImage: null,
            Price: 27.0,
            PriceLabel: "$27.00",
            ProductTags: [
              1, 3, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
              60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
              76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 90, 91, 92, 93, 189,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.adidas.com/us/product/kids-originals-dragon-shoes/AU272?cid=G95074&breadcrumb=1z13071Z1z11zrf&search=Dragon+Shoes&cm_vc=SEARCH",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
          {
            ProductId: 206557,
            ProductTitle: "adidas Heart Rate Monitor With Textile Strap",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Adidas\r\n\r\nProduct Description:\r\n\r\nadidas The more you know, the smarter you perform. This heart rate monitor uses innovative Bluetooth Smart technology to capture your heart rate so you can analyze and fine-tune your performance. It comes with a chest strap and can be used with other adidas hear",
            ProductImage:
              "http://i.tfcdn.com/img2/sT-Zj04ABcHBCoAgDABQ6dy3uKLE6EeCLjKcmAeduPn_vbc8djXSeagEbBR4KjEPMZ9qvwHEk7MSU0veRq5QBErFnACpEEoePDu8bj_OK2z7Dw**/G2Zqlv8A.B",
            ThumbnailProductImage: null,
            Price: 60.0,
            PriceLabel: "$60.00",
            ProductTags: [1, 3, 17, 18, 19, 28, 38, 93, 188],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.adidas.com/us/product/training-heart-rate-monitor-with-textile-strap/VL441?cid=Z51348&search=HEART+RATE+MONITOR+WITH+TEXTILE+STRAP&cm_vc=SEARCH",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
          {
            ProductId: 206425,
            ProductTitle: "adidas Perforated Holdall Bag",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Adidas\r\n\r\nProduct Description:\r\n\r\nadidas Made to carry everyday essentials, this ...",
            ProductImage:
              "http://i.tfcdn.com/img2/XMgvhUIAYwrX42FILChILErNYcgoKSmw0tcvNk8x1StOTs1LNddLzs_VzyzWz8xNTE_VT0zJTEksTi_KLy3Qd7cwsTQ3iTcwBAA*/G2Zqlv8A.B",
            ThumbnailProductImage: null,
            Price: 65.0,
            PriceLabel: "$65.00",
            ProductTags: [
              28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
              61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
              77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 90, 91, 92, 96, 97, 98,
              99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.thefind.com/buy-fHBnC0zZq?result_view_id=97f5ca97e7e9ac50fc12d3b345776a79%3A0000&result_impression_id=97f5ca97e7e9ac50fc12d3b345776a79%3A0001&position=&top_category=",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
        ],
        StoreName: "Adidas",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/Adidas_logo1.png",
        StoreOrder: 12,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/Adidas_logo1.png",
        IsAffiliate: null,
        StoreText:
          "Don't worry about size or color, the recipient makes the final choice",
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: null,
        StoreId: 162,
        DeliveryType: 1,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 205575,
            ProductTitle: "Waxed Canvas Work Bag",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Lands\' End\r\n\r\nProduct Description:\r\n\r\nFROM WORK TO WEEKEND: THROW IT ALL OVER YOUR SHOULDER.\nWaxed cotton canvas\nHerringbone lining\nGenuine leather trim\nClip-off adjustable cotton webbing strap\nAntiqued metal hardware\nExterior snap-close pockets\nLeather patch can be embossed\nMultiple internal pockets\n13"Hx15 1/2"Wx6 1/2"D, fits up to a standard 15" laptop',
            ProductImage:
              "http://s7.landsend.com/is/image/LandsEnd/434364_A513_LF_LHB?fmt=jpeg,rgb&qlt=80,1&op_sharpen=0&resMode=sharp2&op_usm=0.5,1,3,0&icc=sRGB%20IEC61966-2.1,relative&iccEmbed=1&rgn=0,0,2000,3000&scl=4.47427",
            ThumbnailProductImage: null,
            Price: 12.99,
            PriceLabel: "$12.99",
            ProductTags: [
              1, 2, 3, 4, 17, 18, 19, 28, 29, 30, 33, 42, 44, 50, 51, 52, 66,
              72, 85, 86, 90, 91, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.landsend.com/products/waxed-canvas-work-bag/id_257459",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
        ],
        StoreName: "Lands' End",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/LandsEnd.png",
        StoreOrder: 13,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/LandsEnd.png",
        IsAffiliate: null,
        StoreText:
          "Don't worry about size or color, the recipient makes the final choice",
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: null,
        StoreId: 202,
        DeliveryType: 1,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 206549,
            ProductTitle: "Chicago Cutlery  15pc Essentials Block Cutlery Set",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Sears\r\n\r\nProduct Description:\r\n\r\n",
            ProductImage:
              "http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_580200001?hei=600&amp;wid=600&amp;op_sharpen=1&amp;qlt=90,0&amp;resMode=sharp&amp;op_usm=0.9,0.5,0,0",
            ThumbnailProductImage: null,
            Price: 49.99,
            PriceLabel: "$49.99",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
              61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
              77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 90, 91, 92, 93, 96, 97,
              98, 99, 100, 104, 111, 112, 113, 114, 115, 116, 117, 118, 119,
              120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132,
              133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145,
              146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158,
              159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 171, 172,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink: "",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
        ],
        StoreName: "Sears",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/sears_logo.png",
        StoreOrder: 32,
        StoreOrder1: 1,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/sears_logo.png",
        IsAffiliate: null,
        StoreText: "Find a gift for everyone!",
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: null,
        StoreId: 187,
        DeliveryType: 3,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 213530,
            ProductTitle: "Hot Topic product1",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Hot Topic\r\n\r\nProduct Description:\r\n\r\nHot Topic product ",
            ProductImage:
              "http://www.jpl.nasa.gov/spaceimages/images/mediumsize/PIA17011_ip.jpg",
            ThumbnailProductImage: null,
            Price: 15.88,
            PriceLabel: "$15.88",
            ProductTags: [
              1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 28, 33, 38, 42,
              44, 50, 51, 52, 66, 72, 85, 90, 91, 96, 97, 98, 99, 100,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.jpl.nasa.gov/spaceimages/images/mediumsize/PIA17011_ip.jpg",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
        ],
        StoreName: "Hot Topic",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/hot_topic.png",
        StoreOrder: 45,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/hot_topic.png",
        IsAffiliate: null,
        StoreText:
          "Don't worry about size or color, the recipient makes the final choice",
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: null,
        StoreId: 200,
        DeliveryType: 1,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 205399,
            ProductTitle: "$25 Starbucks E-Gift Card",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Starbucks\r\n\r\nProduct Description:\r\n\r\nOnce received, a Starbucks Card eGift can be spent on anything at Starbucks or even transferred to a registered Starbucks Card. It�s the smarter way to give a gift.",
            ProductImage:
              "https://www.starbucks.com/assets/91d702ecf55b4d3ab1df060384df9793.png",
            ThumbnailProductImage: null,
            Price: 25.0,
            PriceLabel: "$25.00",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
              61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
              77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 90, 91, 92, 93, 188, 189,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink: "http://www.starbucksstore.com/",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
        ],
        StoreName: "Starbucks",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/starbucks_logo.png",
        StoreOrder: 48,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/starbucks_logo.png",
        IsAffiliate: null,
        StoreText:
          "Treat your friend to a morning boost asd asdasthe recipient makes the final choice asd asd asd asd",
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: null,
        StoreId: 1227,
        DeliveryType: 1,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 213254,
            ProductTitle: "Timberland Knit Convertible Gloves",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at DSW\r\n\r\nProduct Description:\r\n\r\nPerfect for the guy who wants the best of both worlds, the Knit Convertible glove from Timberland easily converts from fingerless glove to mitten! Keep your hands warm and cozy with these knit gloves featuring genuine leather palms for extra grip!\n\n50% wool, 50% acrylic\nGenuine leather palm\nConvertible fingerless to mitten function\n100% polyester lining\nFor sizing measure around the widest part of hand, excluding thumb: S - 7.5"-8", M - 8.5", L - 9"-9.5", XL - 10"-10.5"\nImported',
            ProductImage:
              "http://s7d2.scene7.com/is/image/DSWShoes/286049_022_ss_01?scl=3.125&qlt=70&fmt=jpeg&wid=480&hei=359&op_sharpen=1",
            ThumbnailProductImage: null,
            Price: 24.95,
            PriceLabel: "$24.95",
            ProductTags: [
              1, 2, 19, 28, 30, 33, 37, 38, 39, 41, 42, 44, 46, 47, 49, 50, 51,
              52, 53, 55, 56, 58, 60, 62, 63, 65, 66, 67, 68, 69, 70, 72, 73,
              75, 76, 77, 78, 79, 80, 81, 82, 84, 85, 86, 90, 91, 94, 96, 97,
              98, 99, 100, 101, 102, 105, 106, 107, 108, 189,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink:
              "http://www.dsw.com/accessories/timberland+knit+convertible+gloves?prodId=286049&category=dsw12cat2830006&activeCats=cat20192,dsw12cat2830006",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
          {
            ProductId: 213458,
            ProductTitle: "DSW $25 eGift Card",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at DSW\r\n\r\nProduct Description:\r\n\r\nShop the latest shoes and accessories for women, men, and kids.",
            ProductImage: "http://www.jifiti.com/images/giftcards/dsw.png",
            ThumbnailProductImage: null,
            Price: 25.0,
            PriceLabel: "$25.00",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 28, 29,
              30, 31, 33, 34, 36, 37, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
              49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64,
              65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
              82, 83, 84, 85, 86, 90, 91, 92, 93, 94, 96, 97, 98, 99, 100, 101,
              102, 105, 106, 107, 108, 109, 125, 169, 189,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink: "http://www.dsw.com",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
          {
            ProductId: 213459,
            ProductTitle: "DSW $50  eGift Card\t",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at DSW\r\n\r\nProduct Description:\r\n\r\nShop the latest shoes and accessories for women, men, and kids.",
            ProductImage: "http://www.jifiti.com/images/giftcards/dsw.png",
            ThumbnailProductImage: null,
            Price: 50.0,
            PriceLabel: "$50.00",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 34, 36, 37, 39, 40, 41, 42, 43, 44, 45, 46,
              47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
              63, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79,
              80, 81, 82, 83, 84, 85, 86, 90, 91, 92, 93, 94, 96, 97, 98, 99,
              100, 101, 102, 112, 116, 130, 189,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink: "http://www.dsw.com\t",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
          {
            ProductId: 213460,
            ProductTitle: "DSW $75 eGift Card\t",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at DSW\r\n\r\nProduct Description:\r\n\r\nShop the latest shoes and accessories for women, men, and kids.",
            ProductImage: "http://www.jifiti.com/images/giftcards/dsw.png",
            ThumbnailProductImage: null,
            Price: 75.0,
            PriceLabel: "$75.00",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 28,
              29, 30, 31, 33, 34, 36, 37, 39, 40, 41, 42, 43, 44, 45, 46, 47,
              48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
              64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79, 80,
              81, 82, 83, 84, 85, 86, 90, 91, 92, 93, 94, 96, 97, 98, 99, 100,
              101, 102, 105, 106, 107, 108, 109, 189,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink: "http://www.dsw.com\t",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
          {
            ProductId: 213453,
            ProductTitle: "DSW $100 eGift Card\t",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at DSW\r\n\r\nProduct Description:\r\n\r\nShop the latest shoes and accessories for women, men, and kids.",
            ProductImage: "http://www.jifiti.com/images/giftcards/dsw.png",
            ThumbnailProductImage: null,
            Price: 100.0,
            PriceLabel: "$100.00",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 34, 36, 37, 39, 40, 41, 42, 43, 44, 45, 46,
              47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
              63, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79,
              80, 81, 82, 83, 84, 85, 86, 90, 91, 92, 93, 94, 96, 97, 98, 99,
              100, 101, 102, 105, 106, 107, 108, 109, 182, 189,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink: "http://www.dsw.com\t",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
          {
            ProductId: 213461,
            ProductTitle: "DSW $150 eGift Card\t",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at DSW\r\n\r\nProduct Description:\r\n\r\nShop the latest shoes and accessories for women, men, and kids.",
            ProductImage: "http://www.jifiti.com/images/giftcards/dsw.png",
            ThumbnailProductImage: null,
            Price: 150.0,
            PriceLabel: "$150.00",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 34, 36, 37, 39, 40, 41, 42, 43, 44, 45, 46,
              47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
              63, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79,
              80, 81, 82, 83, 84, 85, 86, 90, 91, 92, 93, 94, 96, 97, 98, 99,
              100, 101, 102, 105, 106, 107, 108, 109, 189,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink: "http://www.dsw.com\t",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
        ],
        StoreName: "DSW",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/dsw.png",
        StoreOrder: 80,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/dsw.png",
        IsAffiliate: null,
        StoreText:
          "Don't worry about size or color, the recipient makes the final choice",
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: null,
        StoreId: 116,
        DeliveryType: 1,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 213203,
            ProductTitle: "Expressions of Pink�",
            Description:
              'A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at 1-800-flowers\r\n\r\nExpressing your feelings should always be this easy. Let our beautiful arrangement send the right message, with its stunning fresh pink blooms, including roses, lilies, carnations and more, hand-arranged by our florists inside a classic vase. With sophistication and style, it will have them smiling no matter what the occasion.\n\nArrangement of pink roses, lilies, carnations, waxflower and heather, accented with salal\nArtistically designed by our expert florists inside a clear glass vase with a stylish decorative ribbon; measures 11"H\nLarge arrangement measures approximately 18"H x 11.5"L\nMedium arrangement measures approximately 17.5"H x 11"L\nSmall arrangement measures approximately 17"H x 10.5"L\nOur florists hand-design each arrangement, so colors, varieties, and container may vary due to local availability\nLilies may arrive in bud form and will open to full beauty over the next 2-3 days',
            ProductImage:
              "http://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/105015lz.jpg",
            ThumbnailProductImage: null,
            Price: 89.99,
            PriceLabel: "$89.99",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
              61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
              77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 88, 90, 91, 92, 93, 96,
              97, 98, 99, 100, 104,
            ],
            IsTopGift: true,
            IsPopularGift: false,
            ProductLink:
              "http://www.1800flowers.com/expressions-of-pink?categoryId=400077168",
            IsAffiliate: null,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 140,
          },
        ],
        StoreName: "1-800-flowers",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/1800flowers.png",
        StoreOrder: 1000,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/1800flowers.png",
        IsAffiliate: null,
        StoreText: "Put a smile on their face!",
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: 140,
        StoreId: 1241,
        DeliveryType: 3,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 213561,
            ProductTitle: "Charity Product 1 ",
            Description: "",
            ProductImage: "http://teachers.cie.org.uk/gp/images/charity.jpg",
            ThumbnailProductImage: null,
            Price: 25.0,
            PriceLabel: "$25.00",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
              61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
              77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 90, 91, 92, 93, 188, 189,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink: "",
            IsAffiliate: null,
            ShippingMandatory: null,
            PersonalMessageMaxLength: 150,
          },
        ],
        StoreName: "Charity Choice",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/charity.png",
        StoreOrder: 1000,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/charity.png",
        IsAffiliate: null,
        StoreText: "Make a donation in their name - They select the charity!",
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: 150,
        StoreId: 1259,
        DeliveryType: 1,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 213218,
            ProductTitle: "random product",
            Description: "",
            ProductImage:
              "http://slimages.macys.com/is/image/MCY/products/1/optimized/2227741_fpx.tif?wid=600&hei=510&fit=fit,1&$filterxlrg$",
            ThumbnailProductImage: null,
            Price: 14.0,
            PriceLabel: "$14.00",
            ProductTags: [
              1, 2, 3, 4, 11, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40,
              41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
              57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
              73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 90, 91,
              92, 104,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink: "",
            IsAffiliate: null,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
          {
            ProductId: 213216,
            ProductTitle: "AMC Theaters $25 eGift Card",
            Description: "Enjoy a fun night out at an AMC movie theater",
            ProductImage: "http://www.jifiti.com/images/amc_product1.png",
            ThumbnailProductImage: null,
            Price: 25.0,
            PriceLabel: "$25.00",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
              61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
              77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 90, 91, 92, 93, 96, 97,
              98, 99, 100, 188,
            ],
            IsTopGift: false,
            IsPopularGift: false,
            ProductLink: "https://www.amctheatres.com/",
            IsAffiliate: null,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
          {
            ProductId: 213217,
            ProductTitle: "Spa Finder $50 eGift Card",
            Description:
              "One Card, Endless Spa & Wellness Options. Never Expires",
            ProductImage:
              "http://www.jifiti.com/images/giftcards/spa-finder-wellness-gift-card.png",
            ThumbnailProductImage: null,
            Price: 50.0,
            PriceLabel: "$50.00",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
              61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
              77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 88, 90, 91, 92, 93, 96,
              97, 98, 99, 100, 188,
            ],
            IsTopGift: true,
            IsPopularGift: false,
            ProductLink: "http://www.spafinder.com/",
            IsAffiliate: null,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
        ],
        StoreName: "Good Time",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/goodtimes.png",
        StoreOrder: 1000,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/goodtimes.png",
        IsAffiliate: null,
        StoreText: "Send them on an experience",
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: null,
        StoreId: 1246,
        DeliveryType: 1,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
      {
        Products: [
          {
            ProductId: 209943,
            ProductTitle: "Hobart Handler 140 Wire Feeder Welder Package",
            Description:
              "A Jifiti gift will be received by the recipient as a virtual gift card which can be used to redeem the suggested gift or any other item at Kmart\r\n\r\nProduct Description:\r\n\r\n",
            ProductImage:
              "http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_869174712?hei=1000&wid=1000&op_sharpen=1",
            ThumbnailProductImage: null,
            Price: 689.99,
            PriceLabel: "$689.99",
            ProductTags: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
              61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
              77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 90, 91, 92, 93, 96, 97,
              98, 99, 100, 104, 111, 112, 113, 114, 115, 116, 117, 118, 119,
              120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132,
              133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145,
              146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158,
              159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 171, 172,
            ],
            IsTopGift: false,
            IsPopularGift: true,
            ProductLink:
              "http://www.kmart.com/hobart-handler-140-wire-feeder-welder-package/p-00937667000P?prdNo=1&blockNo=1&blockType=G1",
            IsAffiliate: false,
            ShippingMandatory: null,
            PersonalMessageMaxLength: null,
          },
        ],
        StoreName: "Kmart",
        StoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteCircles/Kmart.png",
        StoreOrder: 1000,
        StoreOrder1: 1000,
        RegularStoreLogo:
          "http://qa.jifiti.com/Images/storelogos/eviteRegular/Kmart.png",
        IsAffiliate: null,
        StoreText: null,
        HeaderImage: null,
        BGColor: null,
        ShippingMandatory: null,
        PersonalMessageMaxLength: null,
        StoreId: 1245,
        DeliveryType: 1,
        ShippingPolicyText: null,
        SchedulingType: 1,
      },
    ])
  )
}
