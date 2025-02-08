class ImageApi {
  static accessKey = "o-63h0E0rBOPpOPOfpVOaY2Iu8mSI8di0iRs1CMofXM";
  static baseUrl = "https://api.unsplash.com/photos/random";

  static async getImages(category = "animals", count = 30) {
    try {
      const response = await fetch(
        `${ImageApi.baseUrl}?query=${category}&count=${count}&client_id=${ImageApi.accessKey}`
        // `${ImageApi.baseUrl}?query=${category}&per_page=${count}&client_id=${ImageApi.accessKey}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      return [
        {
          id: "saTc0bryOBM",
          urls: {
            small:
              "https://images.unsplash.com/photo-1612975921855-a5af89c90a27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
        {
          id: "wYy3rvvgjAU",
          urls: {
            small:
              "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
        {
          id: "fg_FSTo7ejw",
          urls: {
            small:
              "https://images.unsplash.com/photo-1520634996521-d0985c84316a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
          urls: {
            small:
              "https://images.unsplash.com/photo-1551946581-f7a62cd2f00b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
        {
          id: "915UJQaxtrk",
          urls: {
            small:
              "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
        {
          id: "Jx-Gk0Sc6uA",
          urls: {
            small:
              "https://images.unsplash.com/photo-1583122624368-93607357113c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
        {
          id: "1k3y9v6l9II",
          urls: {
            small:
              "https://images.unsplash.com/photo-1578326626553-39f72c545b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
        {
          id: "2vbhN2Yjb3A",
          urls: {
            small:
              "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
        {
          id: "2v5hN2Yjb3A",
          urls: {
            small:
              "https://images.unsplash.com/photo-1603632076161-5836b146638c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },

        {
          id: "4rnGfF7XbYY",
          urls: {
            small:
              "https://images.unsplash.com/photo-1554490828-442467b562dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
        {
          id: "4rn8GfF7XbYY",
          urls: {
            small:
              "https://images.unsplash.com/photo-1567608346847-6d9817e63e8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
        {
          id: "78v5hN2Yjb3A",
          urls: {
            small:
              "https://images.unsplash.com/photo-1615752306634-0ba647760db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
        {
          id: "89v5hN2Yjb3A",
          urls: {
            small:
              "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
        {
          id: "38v5hN2Yjb3A",
          urls: {
            small:
              "https://images.unsplash.com/photo-1470688090067-6d429c0b2600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
        {
          id: "djeApmC4sco",
          urls: {
            small:
              "https://images.unsplash.com/photo-1534832847687-ed24b3a9d3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },

        {
          id: "djeApmC4Aco",
          urls: {
            small:
              "https://images.unsplash.com/photo-1604457407295-8aa34e462dcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
        {
          id: "xls6uaTIhaI",
          urls: {
            small:
              "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
        {
          id: "WHrwb43vH9E",
          urls: {
            small:
              "https://images.unsplash.com/photo-1506099914961-765be7a97019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
        {
          id: "U0lLkv3Kb9U",
          urls: {
            small:
              "https://images.unsplash.com/photo-1609695001873-bf16717ba9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
          urls: {
            small:
              "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY3NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzkwNDA2Mzl8&ixlib=rb-4.0.3&q=80&w=400",
          },
        },
      ];
    }
  }
}

export default ImageApi;
