import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import WeatherResults5days from "./WeatherResults5days";

const weather5days = {
    list: [
        {
            dt: 1756728000,
            weather: [
                {
                    icon: "01d",
                    description: "céu limpo",
                },
            ],
            main: {
                temp_min: 18,
                temp_max: 25,
            },
        },
        {
            dt: 1756814400,
            weather: [
                {
                    icon: "02d",
                    description: "algumas nuvens",
                },
            ],
            main: {
                temp_min: 19,
                temp_max: 26,
            },
        },
    ],
};
describe("WeatherResults5days", () => {

    it("displays the forecast title", () => {
        render(
            <WeatherResults5days weather5days={weather5days} />
        );

        expect(
            screen.getByText("Precisão Próximos 5 dias")
        ).toBeInTheDocument();
    });

});