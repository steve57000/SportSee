import {useEffect, useRef, useState} from "react";
import HousingService from "../Hooks";
import Loader from "../components/Loader/Loader"
import React from 'react';
import * as d3 from "d3";
export const LineChart = ({id}) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [errorCall, setErrorCall] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        let dataUser
        HousingService.getUserSessions(id)
        .then((userData) => {
            dataUser = userData;
        })
        .catch(() => {
            setError(true);
        })
        .finally(() => {
            setLoading(false);
            // if url have bad id or name redirect to 404
            if (!dataUser) {
                setErrorCall(true);
            } else {
                setData(dataUser);
            }
        });
    }, [id]);

    const formatDay = (day) => {
        switch (day) {
            case 1 :
                return 'L'
            case 2 :
                return 'M'
            case 3 :
                return 'M'
            case 4 :
                return 'J'
            case 5 :
                return 'V'
            case 6 :
                return 'S'
            case 7 :
                return 'D'
            default :
                return null
        }
    }
    let newData = []
    const dataSession = data.map((lengthSession) => newData.push({sessionDuration: lengthSession.sessionLength, day: lengthSession.day}))
    const dataDay = data.map((daySession) => daySession.day)

console.log(newData)
    console.log(data)
    useEffect(() => {
        drawChart()
    }, [data]);
    const drawChart = () => {
        const margin = {top: 50, right: 20, bottom: 50, left: 20}
        const width = 362
        const height = 100
        const yMinValue = d3.min(data, d => d.sessionLength);
        const yMaxValue = d3.max(data, d =>  d.sessionLength);
        const xMinValue = d3.min(data, d =>  d.day);
        const xMaxValue = d3.max(data, d => d.day);

        const svg = d3
            .select('#lineChart-container')
            .append('svg')
            .attr('width', width + margin.left + margin.right )
            .attr('height', height + margin.top + margin.bottom )
            .style('background', '#d3d3d3')
            .style('overflow', 'visible')

        const xScale = d3
            .scaleLinear()
            .domain([0, data.day.length])
            .range([0, width]);
        const yScale = d3
            .scaleLinear()
            .range([height, 0])
            .domain([0, yMaxValue]);
        const line = d3
            .line()
            .x(d => xScale(d))
            .y(d => yScale(d))
            .curve(d3.curveMonotoneX);

        svg
        .append('g')
        .attr('class', 'grid')
        .attr('transform', `translate(0,${height})`)
        .call(
            d3.axisBottom(xScale)
            .tickSize(-height)
            .tickFormat(''),
        );
        svg
        .append('g')
        .attr('class', 'grid')
        .call(
            d3.axisLeft(yScale)
            .tickSize(-width)
            .tickFormat(''),
        );
        svg
        .append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom().scale(xScale).tickSize(0));
        svg
        .append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(yScale));
        svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#f6c3d0')
        .attr('stroke-width', 4)
        .attr('class', 'line')
        .attr('d', line);
        // const xScale = d3
        //     .scaleLinear()
        //     .domain([xMinValue , xMaxValue])
        //     .range([0, width ]);
        //
        // const yScale = d3
        //     .scaleLinear()
        //     .domain([0, height])
        //     .range([height, 0])
        //
        // const generateScaledLine = d3
        //     .line()
        //     .x(d => xScale(d))
        //     .y(yScale())
        //     .curve(d3.curveCardinal);
        //
        // // Setting the axes
        // const xAxis = d3.axisBottom(xScale)
        // .tickSize(-height)
        // .tickFormat('')
        // // .tickFormat( d  => formatDay(d))
        // const yAxis = d3.axisLeft(yScale)
        // .tickSize(-width)
        // .tickFormat('')
        //
        // svg.append('g')
        // .call(xAxis)
        // .attr("transform", `translate(0, ${height - margin.bottom}`)
        // //
        // svg.append('g')
        // .call(yAxis)
        //
        // // Setting up the data for the svg
        // svg.selectAll('.line')
        // .data([dataSession, dataDay])
        // .join('path')
        // .attr('d', d => generateScaledLine(d))
        // .attr('fill', 'none')
        // .attr('stroke', 'black')

        // svg.selectAll('.domain')
        // .attr('d', d => null)
        //
        // svg.selectAll('.tick line')
        // .attr('y2', y => null)

    }
    return (
        <>
            {isLoading ?  (
                <Loader />
            ) : (
                <div id='lineChart-container'></div>
                )
            }

        </>
    )
}