//=====================================================================
// Name        : latos.cpp
// Author      : ZK_KAI
// Copyright   : Your copyright notice
// Description : Hello World in C++, Ansi-style
//=====================================================================
#include <iostream>
#include <ctime>
#include <algorithm>
#define N 49
#define number 6
using namespace std;
 
int main() {

    int win[number],mynum[number],special = 0,data[N],temp = 0;
    int i,j,tmp,myspecial;
 	// 輸入六個數字 
 	cout<<"請輸入01~49中任選6個號碼進行投注:"<<endl;
	for(i = 0;i < 6;i++){
 		cin>>mynum[i];
	}
	cin>>myspecial;
 	// 歸零 
    for(i = 0;i < N;i++){
        data[i] = 0;
    }
    srand(time(NULL));
	// 出六個亂數數字並判斷有沒有歸零 
    for(i = 0;i < number;i++){
        do{
            temp = rand()%49+1;
        }while(data[temp] == 1);
        data[temp] = 1;
        win[i] = temp;
    }
    //特別號 
    do{
        temp = rand()%49+1;
    }while(data[temp] == 1);
    data[temp] = 1;
    special = temp + 1;
 	//還沒排列的順序 
    cout<<"開出順序:";
    for(i = 0;i < number;i++){
        cout<<win[i]<<" ";
    }
    cout<<" 特別號:"<<special<<endl;
 	//排序後 
    sort(win,win + 6);
    cout<<"大小順序:";
    for(i = 0;i < number;i++){
        cout<<win[i]<<" ";
    }
    cout<<" 特別號:"<<special<<endl;
    // 判斷中幾個號碼 
    int total = 0;
    for(i = 0;i < number;i++){
    	for(j = 0;j < number;j++){
    		if(mynum[j] == win[i]){
    			total++;
			}    		
		}
	}
 	// 判斷中哪一個獎 
//	cout<<total<<endl;
	cout<<"獎項:"; 
	if(total == 6){
		cout<<"頭獎";
	}else if(total == 5 && myspecial == special){
		cout<<"貳獎";
	}else if(total == 5){
		cout<<"參獎";
	}else if(total == 4 && myspecial == special){
		cout<<"肆獎";
	}else if(total == 4){
		cout<<"伍獎 NT$2,000";
	}else if(total == 3 && myspecial == special){
		cout<<"陸獎 NT$1,000";
	}else if(total == 2 && myspecial == special){
		cout<<"柒獎 NT$400";
	}else if(total == 3){
		cout<<"普獎 NT$400";
	}else{
		cout<<"很抱歉沒中獎";
	}
    return 0;
}