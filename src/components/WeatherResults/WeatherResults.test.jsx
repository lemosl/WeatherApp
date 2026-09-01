import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";
import WeatherResults from "./WeatherResults";



describe("WeatherResults", () => {
     const weather = {
            name: "Lisboa",
            timezone: 0,
            weather: [
                {
                    icon: "01d",
                    description: "céu limpo",
                },
            ],
            main: {
                temp: 19,
                feels_like: 19,
                humidity: 19,
                pressure: 1020,
            },
            
        };
    it("displays weather information", () => {

       
        render(<WeatherResults weather={weather} />);

        expect(
            screen.getByText("19°C")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Lisboa")
        ).toBeInTheDocument();


    });
    it("displays the weather icon", () => {
        render(<WeatherResults weather={weather} />);

        expect(
            screen.getByAltText("céu limpo")
        ).toBeInTheDocument();
    });
    it("does not display an error message", () => {
    render(<WeatherResults weather={weather} />);

    expect(
        screen.queryByText("Erro ao carregar o tempo")
    ).not.toBeInTheDocument();
});
});
