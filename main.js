let image = [
  "https://user-images.githubusercontent.com/61589799/132091867-3b546396-25a3-4560-92cc-0577034df3df.jpg",
  "https://user-images.githubusercontent.com/61589799/132091869-20ab219c-fa0e-468b-94e3-924e86920db7.jpg",
  "https://user-images.githubusercontent.com/61589799/132091873-ac4810ca-22f8-4291-8f76-3a04d11be88d.jpg",
  "https://user-images.githubusercontent.com/61589799/132091874-e00a3ba7-9b93-448c-b974-919ad0d5a227.png",

  "https://user-images.githubusercontent.com/61589799/132091875-3f660764-4952-40dc-864a-acd91e214394.jpg",
  "https://user-images.githubusercontent.com/61589799/132091876-838aaf56-ad2b-4ecb-a4ab-06e60dbedf9c.jpg",
  "https://user-images.githubusercontent.com/61589799/132091878-1effa714-2b75-44cd-8a46-ceb110af0b7a.jpg",
  "https://user-images.githubusercontent.com/61589799/132091879-6d76be71-e7e5-4129-a571-ce6830f31f3d.jpg",
  "https://user-images.githubusercontent.com/61589799/132091882-2872e72d-cc45-4f55-a71e-ff544a84d717.jpg",
  ];
  const imgs = document.getElementsByTagName("img");
  for (var i = 0; i < imgs.length; i++) {
    const randomimg = Math.floor(Math.random()*image.length);
    imgs[i].src=image[randomimg];
  }
