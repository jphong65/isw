/*package com.isw.common.utils;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonUtils {

	*//**
	 * jsonarray --> json object
	 * 
	 * @param array
	 * @param clazz
	 * @return
	 * @throws Exception
	 *//*
	public static <T> List<T> toList(JSONArray array, Class<T> clazz) throws Exception {
		
		List<T> list = new ArrayList<T>();
        for (int i=0, l=array.length(); i<l; i++){
        		JSONObject jsonObj = (JSONObject)array.get(i);
        		ObjectMapper mapper = new ObjectMapper();
             list.add(mapper.readValue(jsonObj.toString(), clazz));
        }
        return list;
	}
	
	*//**
	 * jsonarray --> json object with specified class casting
	 * 
	 * @param obj
	 * @param key
	 * @param clazz
	 * @return
	 * @throws Exception
	 *//*
	public static <T> List<T> toList(JSONObject obj, String key, Class<T> clazz) throws Exception {
		JSONArray array = new JSONArray();
		if( obj.has(key) ) {
			array = obj.getJSONArray(key);
		}
		
		return toList(array, clazz);
	}
	
	*//**
	 * jsonarray --> json object with specified class casting 
	 * in sts(updated, deleted, created) types
	 * 
	 * @param obj
	 * @param key
	 * @param clazz
	 * @param sts
	 * @return
	 * @throws Exception
	 *//*
	public static <T> List<T> toList(JSONObject obj, String key, Class<T> clazz, String sts) throws Exception {
		
		JSONArray targetArray = new JSONArray();
		
		if( obj.has(key) ) {
			JSONArray array = obj.getJSONArray(key);
			
			for( int i = 0; i < array.length(); i++ ) {
				JSONObject jsonObj = (JSONObject)array.get(i);
				String dataSts = jsonObj.getString("sts");
				if( StringUtils.isEmpty(dataSts) ) {
					throw new RuntimeException("Data has no 'sts' field");
				}
				if( sts.equals(dataSts) ) {
					targetArray.put(jsonObj);
				}
			}
		}
		return toList(targetArray, clazz);
	}
	
	
	public static <T extends Object> T toObject(JSONObject obj, String key, Class<T> clazz) throws Exception {
		
		ObjectMapper mapper = new ObjectMapper();
		
		JSONObject value = obj.getJSONObject(key);
		
		return mapper.readValue(value.toString(), clazz);
	}
	
}
*/