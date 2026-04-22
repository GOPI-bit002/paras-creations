export const site = {
  name: "Hotel TARA",
  phoneDisplay: "098167 64281",
  phoneTel: "+919816764281",
  whatsapp: "919816764281",
  address:
    "Vill. & P.O. Behdala, Nangal Road, NH 503, Una, Himachal Pradesh 174306",
  addressShort: "Behdala, Nangal Road, NH 503, Una, H.P.",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Hotel+TARA+Behdala+Nangal+Road+Una+Himachal+Pradesh+174306",
  mapsEmbed:
    "https://www.google.com/maps?q=Behdala+Nangal+Road+NH+503+Una+Himachal+Pradesh+174306&output=embed",
};

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
