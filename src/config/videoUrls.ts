export const videoUrls = [
  "https://res.cloudinary.com/dhr9mntsh/video/upload/v1733087707/2_f4b3uh.mp4",
  "https://res.cloudinary.com/dhr9mntsh/video/upload/v1733087002/9_frxcav.mp4",
  "https://res.cloudinary.com/dhr9mntsh/video/upload/v1733087002/1_ibkgm2.mp4",
  "https://res.cloudinary.com/dhr9mntsh/video/upload/v1733087003/14_grmd1x.mp4",
  "https://res.cloudinary.com/dhr9mntsh/video/upload/v1733086999/5_rs6yzk.mp4",
  "https://res.cloudinary.com/dhr9mntsh/video/upload/v1733086997/8_afemoo.mp4",
  "https://res.cloudinary.com/dhr9mntsh/video/upload/v1733086993/6_k0subq.mp4",
  "https://res.cloudinary.com/dhr9mntsh/video/upload/v1733086994/7_rfs2dt.mp4",
  "https://res.cloudinary.com/dhr9mntsh/video/upload/v1733086993/4_uvoiml.mp4",
  "https://res.cloudinary.com/dhr9mntsh/video/upload/v1733086992/15_nddu71.mp4",
  "https://res.cloudinary.com/dhr9mntsh/video/upload/v1733086989/12_tadyyp.mp4",
  "https://res.cloudinary.com/dhr9mntsh/video/upload/v1733086989/11_gbz3oq.mp4",
  "https://res.cloudinary.com/dhr9mntsh/video/upload/v1733086988/10_h6hodj.mp4",
  "https://res.cloudinary.com/dhr9mntsh/video/upload/v1733086989/13_sxxkcg.mp4",
  "https://res.cloudinary.com/dhr9mntsh/video/upload/v1733086986/3_phg3q9.mp4",
];

// Transform videoUrls into media objects
export const media = videoUrls.map((url, index) => ({
  type: "video",
  src: url,
  id: `video-${index}`,
  title: `Video ${index}`,
}));
