import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import {
  SeatingWrapper,
  AddToCartButton,
  AddToCartContainer,
  ErrorMessage,
  Loader,
} from "./styles";
import { ConfigSelectionData, handleconfig, SeatingConfiguratorProps } from "./types";
import { useCartMutation } from "../../hooks/useCartMutation";
import { calculateCozeyCarePrice } from "../../utils/calculateCozeyCarePrice";
import { useConfigData } from "../../hooks/useConfigData";
import ConfigSelector from "../../components/ConfigSelector";

export const SeatingConfigurator = ({
  seating,
  config,
  price,
  colorsData,
  configId,
}: SeatingConfiguratorProps) => {
  const router = useRouter();
  const [configSelected, setConfigSelected] = useState<ConfigSelectionData>({
    color: seating?.option1OptionsCollection[0]?.value || "",
    seating: seating?.sofa.option2OptionsCollection[0]?.value || "",
  });

  const { addToCart } = useCartMutation();
  const { data: additionalConfig, isLoading, errorMessage, setErrorMessage } = useConfigData(configId);

  useEffect(() => {
    if (seating) {
      setConfigSelected({
        color: seating.option1OptionsCollection[0]?.value,
        seating: seating.sofa.option2OptionsCollection[0]?.value,
      });
    }
  }, [seating]);

  const handleConfig = useCallback((newConfig: handleconfig) => {
    setConfigSelected((prev) => ({ ...prev, ...newConfig }));
  }, []);

  const totalPrice = useMemo(() => {
    return price.value + calculateCozeyCarePrice(config);
  }, [price, config]);

  const handleAddToCart = async () => {
    if (!configSelected.color || !configSelected.seating) {
      setErrorMessage("Please select both a color and a seating option");
      return;
    }

    setErrorMessage(null);

    try {
      await addToCart({
        quantity: 1,
        variantId: configId,
        options: {
          color: configSelected.color,
          seating: configSelected.seating,
        },
      });
      router.push("/cart");
    } catch (error) {
      setErrorMessage("Failed to add item to cart.");
    }
  };

  if (isLoading) {
    return (
      <SeatingWrapper>
        <Loader>Loading configurations...</Loader>
      </SeatingWrapper>
    );
  }

  if (errorMessage || !additionalConfig) {
    return (
      <SeatingWrapper>
        <ErrorMessage>{errorMessage || "No configuration data available."}</ErrorMessage>
      </SeatingWrapper>
    );
  }

  return (
    <SeatingWrapper>
      <ConfigSelector
        label="Select Color"
        options={colorsData.colors}
        selectedValue={configSelected.color || ""}
        onChange={(value) => handleConfig({ color: value })}
      />
      <ConfigSelector
        label="Select Seating Option"
        options={additionalConfig.seatingOptions}
        selectedValue={configSelected.seating || ""}
        onChange={(value) => handleConfig({ seating: value })}
      />
      <AddToCartContainer>
        <AddToCartButton type="button" onClick={handleAddToCart}>
          Add to Cart - ${totalPrice}
        </AddToCartButton>
      </AddToCartContainer>
    </SeatingWrapper>
  );
};
