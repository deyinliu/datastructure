#include<iostream>
using namespace std;
int Callatz(int n){	
    if(n == 1){
        return 0;
    }else{

		if(n%2 == 0){
            return Callatz(n/2)+1;
        }else{
            return Callatz((3*n+1)/2)+1;
        }	
	}
}
int main()
{
	int k;
	cin>>k;
	cout<<Callatz(k)<<endl;
	return 0;
}
