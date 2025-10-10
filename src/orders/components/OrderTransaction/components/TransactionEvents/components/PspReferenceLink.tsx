import { makeStyles } from "@saleor/macaw-ui";
import * as React from "react";

interface PspRerefenceLinkProps {
  href: string | null;
  children: React.ReactChild;
}

const useStyles = makeStyles(
  theme => ({
    link: {
      color: theme.palette.saleor.active[1],
    },
  }),
  { name: "PspReferenceLink" },
);

export const PspReferenceLink = ({ href, children }: PspRerefenceLinkProps) => {
  const classes = useStyles();

  // Only allow http(s) URLs for links, otherwise render children only
  let isValidUrl = false;
  if (
    href &&
    typeof href === "string"
  ) {
    try {
      const parsedUrl = new URL(href);
      if (parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:") {
        isValidUrl = true;
      }
    } catch (e) {
      // Not a valid URL, fall through
    }
  }
    if (isValidUrl) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes.link}>
          {children}
        </a>
      );
    }

    return <>{children}</>;
};
