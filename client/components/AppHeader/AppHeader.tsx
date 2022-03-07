import React, { useCallback } from "react";
import {
  LinkImageTeaser,
  Picture,
  Link as AtomicLink,
  CopyText,
} from "@matthill8286/atomic-ui";

import {
  StyledActionItems,
  StyledHeaderWrapper,
  StyledItemWrapper,
  StyledLogo,
  StyledSection,
} from "./AppHeader.styled";
import { AppHeaderProps } from "./AppHeader.interface";
import { usePaths } from "@/lib/paths";
import Link from "next/link";
import { HamburgerButton } from "../HamburgerButton";

export const AppHeaderComponent = React.memo<AppHeaderProps>(
  ({ headerContent, renderSearchBar, logo, onLogoClick }: AppHeaderProps) => {
    const internalLogoClick = useCallback(() => onLogoClick?.(), []);
    const paths = usePaths();

    return (
      <StyledSection>
        <StyledHeaderWrapper paddingString="sm md">
          {logo && (
            <StyledLogo>
              <Picture
                alt="thumbnail"
                onClick={() => internalLogoClick()}
                src={logo.url}
                width="107px"
                height="64px"
              />
            </StyledLogo>
          )}
          <HamburgerButton onClick={() => internalLogoClick()} />
          <StyledActionItems>
            {headerContent?.searchEnabled && (
              <StyledItemWrapper>{renderSearchBar}</StyledItemWrapper>
            )}

            <StyledItemWrapper>
              <Link href={paths.products.$url()}>
                <CopyText color="white">Products</CopyText>
              </Link>
              <Link href={paths.collections.$url()}>
                <CopyText color="white">Collections</CopyText>
              </Link>
            </StyledItemWrapper>
          </StyledActionItems>
        </StyledHeaderWrapper>
      </StyledSection>
    );
  }
);

AppHeaderComponent.displayName = "AppHeaderComponent";
