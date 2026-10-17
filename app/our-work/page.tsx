import { permanentRedirect } from "next/navigation";

// Friendly alias: /our-work opens the samples gallery.
export default function OurWorkAlias() {
  permanentRedirect("/samples");
}
